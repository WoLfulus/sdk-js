import { IConfiguration } from "./Configuration";
import { IAPI } from "./API";
import { ILoginCredentials, ILoginOptions } from "./schemes/auth/Login";
import { ILoginResponse, RefreshIfNeededResponse } from "./schemes/response/Login";
import { IRefreshTokenResponse } from "./schemes/response/Token";
interface IAuthenticationInjectableProps {
    post: IAPI["post"];
}
export interface IAuthentication {
    refreshInterval?: number;
    isLoggedIn(): boolean;
    login(credentials: ILoginCredentials, options?: ILoginOptions): Promise<ILoginResponse>;
    logout(): void;
    refreshIfNeeded(): Promise<[boolean, Error?]>;
    refresh(token: string): Promise<IRefreshTokenResponse>;
}
/**
 * Handles all authentication related logic, decoupled from the core
 * @internal
 */
export declare class Authentication implements IAuthentication {
    private config;
    private inject;
    /**
     * Current set auto-refresh interval or undefined
     * @type {number|undefined}
     */
    refreshInterval?: number;
    /**
     * Optional customized error handler
     * @internal
     */
    private onAutoRefreshError?;
    /**
     * Optional customized success handler
     * @internal
     */
    private onAutoRefreshSuccess?;
    /**
     * Creates a new authentication instance
     * @constructor
     * @param {IConfiguration} config
     * @param {IAuthenticationInjectableProps} inject
     */
    constructor(config: IConfiguration, inject: IAuthenticationInjectableProps);
    /**
     * If the current auth status is logged in
     * @return {boolean}
     */
    isLoggedIn(): boolean;
    /**
     * Login to the API; Gets a new token from the API and stores it in this.token.
     * @param {ILoginCredentials} credentials   User login credentials
     * @param {ILoginOptions?} options          Additional options regarding persistance and co.
     * @return {Promise<ILoginResponse>}
     */
    login(credentials: ILoginCredentials, options?: ILoginOptions): Promise<ILoginResponse>;
    /**
     * Logs the user out by "forgetting" the token, and clearing the refresh interval
     */
    logout(): void;
    /**
     * Refresh the token if it is about to expire (within 30 seconds of expiry date).
     * - Calls onAutoRefreshSuccess with the new token if the refreshing is successful.
     * - Calls onAutoRefreshError if refreshing the token fails for some reason.
     * @return {RefreshIfNeededResponse}
     */
    refreshIfNeeded(): Promise<RefreshIfNeededResponse>;
    /**
     * Use the passed token to request a new one.
     * @param {string} token
     */
    refresh(token: string): Promise<IRefreshTokenResponse>;
    /**
     * Starts an interval of 10 seconds that will check if the token needs refreshing
     * @param {boolean?} fireImmediately    If it should immediately call [refreshIfNeeded]
     */
    private startInterval;
    /**
     * Clears and nullifies the token refreshing interval
     */
    private stopInterval;
    /**
     * Gets the payload of the current token, return type can be generic
     * @typeparam T     The payload response type, arbitrary object
     * @return {T}
     */
    private getPayload;
}
export {};
//# sourceMappingURL=Authentication.d.ts.map