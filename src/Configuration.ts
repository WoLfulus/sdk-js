/**
 * @module Configuration
 */

const STORAGE_KEY = "directus-sdk-js";

// defining needed methods for the abstract storage adapter
export interface IStorageAPI {
  getItem<T extends any = any>(key: string): T;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
}

// configuration merged with defaults
export interface IConfigurationValues {
  url: string;
  project: string;
  token?: string;
  localExp?: number;
  tokenExpirationTime?: number;
  persist: boolean;
}

export interface IConfiguration {
  token: string;
  url: string;
  project: string;
  localExp?: number;
  tokenExpirationTime: number;
  persist: boolean;
  dehydrate(): IConfigurationValues;
  deleteHydratedConfig();
  hydrate(config: IConfigurationValues);
  partialUpdate(config: Partial<IConfigurationValues>): void;
  reset(): void;
  update(config: IConfigurationValues);
}

// default settings
export interface IConfigurationDefaults {
  tokenExpirationTime: number;
  project: string;
}

// constructor options
export interface IConfigurationOptions {
  /**
   * The URL of the direcuts CMS
   */
  url: string;
  /**
   * The token to authenticate if preferred
   */
  token?: string;
  /**
   * Project namespace
   */
  project?: string;
  /**
   * Default login expiration as number in ms
   */
  localExp?: number;
  /**
   * If the token should be persitated or rehydrated
   */
  persist?: boolean;
  /**
   * Auto token expiration time
   */
  tokenExpirationTime?: number;
}

/**
 * Configuration holder for directus implementations
 * @author Jan Biasi <biasijan@gmail.com>
 */
export class Configuration implements IConfiguration {
  /**
   * Defaults for all directus sdk instances, can be modified if preferred
   * @type {IConfigurationDefaults}
   */
  public static defaults: IConfigurationDefaults = {
    project: "_",
    tokenExpirationTime: 5 * 6 * 1000,
  };

  /**
   * Saves the internal configuration values, **DO NOT modify** from the outside
   * @internal
   */
  private internalConfiguration: IConfigurationValues;

  /**
   * Creates a new configuration instance, will be used once for each directus instance (passing refs).
   * @constructor
   * @param {IConfigurationOptions} initialConfig   Initial configuration values
   * @param {IStorageAPI?} storage                  Storage adapter for persistence
   */
  constructor(initialConfig: IConfigurationOptions = {} as any, private storage?: IStorageAPI) {
    let dehydratedConfig: IConfigurationValues = {} as IConfigurationValues;

    if (storage && Boolean(initialConfig && initialConfig.persist)) {
      // dehydrate if storage was provided and persist flag is set
      dehydratedConfig = this.dehydratedInitialConfiguration(storage);
    }

    const persist = Boolean(dehydratedConfig.persist || initialConfig.persist);
    const project = dehydratedConfig.project || initialConfig.project || Configuration.defaults.project;
    const tokenExpirationTime =
      dehydratedConfig.tokenExpirationTime ||
      initialConfig.tokenExpirationTime ||
      Configuration.defaults.tokenExpirationTime;

    this.internalConfiguration = {
      ...initialConfig,
      ...dehydratedConfig,
      persist,
      project,
      tokenExpirationTime,
    };
  }

  // ACCESSORS =================================================================

  public get token(): string | undefined {
    return this.internalConfiguration.token;
  }

  public set token(token: string) {
    this.partialUpdate({ token });
  }

  public get tokenExpirationTime(): number | undefined {
    return this.internalConfiguration.tokenExpirationTime;
  }

  public set tokenExpirationTime(tokenExpirationTime: number) {
    // TODO: Optionally re-compute the localExp property for the auto-refresh
    this.partialUpdate({
      tokenExpirationTime: tokenExpirationTime * 60000,
    });
  }

  public get url(): string {
    return this.internalConfiguration.url;
  }

  public set url(url: string) {
    this.partialUpdate({ url });
  }

  public get project(): string {
    return this.internalConfiguration.project;
  }

  public set project(project: string) {
    this.partialUpdate({
      project: project || "_",
    });
  }

  public get localExp(): number | undefined {
    return this.internalConfiguration.localExp;
  }

  public set localExp(localExp: number | undefined) {
    this.partialUpdate({ localExp });
  }

  public get persist(): boolean {
    return this.internalConfiguration.persist;
  }

  public set persist(persist: boolean) {
    this.internalConfiguration.persist = persist;
  }

  // HELPER METHODS ============================================================

  /**
   * Update the configuration values, will also hydrate them if persistance activated
   * @param {IConfigurationValues} config
   */
  public update(config: IConfigurationValues): void {
    this.internalConfiguration = config;

    this.hydrate(config);
  }

  /**
   * Update partials of the configuration, behaves like the [update] method
   * @param {Partial<IConfigurationValues>} config
   */
  public partialUpdate(config: Partial<IConfigurationValues>): void {
    this.internalConfiguration = {
      ...this.internalConfiguration,
      ...config,
    };

    this.hydrate(this.internalConfiguration);
  }

  /**
   * Reset the whole confiugration and remove hydrated values from storage as well
   */
  public reset(): void {
    delete this.internalConfiguration.token;
    delete this.internalConfiguration.url;
    delete this.internalConfiguration.localExp;

    this.internalConfiguration.project = "_";

    this.deleteHydratedConfig();
  }

  // STORAGE METHODS ===========================================================

  public dehydrate(): IConfigurationValues | undefined {
    if (!this.storage || !this.persist) {
      return;
    }

    const nativeValue = this.storage.getItem(STORAGE_KEY);

    if (!nativeValue) {
      return;
    }

    const parsedConfig = JSON.parse(nativeValue);
    this.internalConfiguration = parsedConfig;

    return parsedConfig;
  }

  public hydrate(props: IConfigurationValues) {
    if (!this.storage || !this.persist) {
      return;
    }

    this.storage.setItem(STORAGE_KEY, JSON.stringify(props));
  }

  public deleteHydratedConfig(): void {
    if (!this.storage || !this.persist) {
      return;
    }

    this.storage.removeItem(STORAGE_KEY);
  }

  private dehydratedInitialConfiguration(storage: IStorageAPI): IConfigurationValues {
    if (!storage) {
      return {} as IConfigurationValues;
    }

    const nativeValue = storage.getItem(STORAGE_KEY);

    if (!nativeValue) {
      return;
    }

    try {
      return JSON.parse(nativeValue);
    } catch (err) {
      return {} as IConfigurationValues;
    }
  }
}
