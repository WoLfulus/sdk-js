> **[@directus/sdk-js](../README.md)**

[Globals](../README.md) / ["SDK"](../modules/_sdk_.md) / [SDK](_sdk_.sdk.md) /

# Class: SDK

Main SDK implementation provides the public API to interact with a
remote directus instance.

**`uses`** API

**`uses`** Configuration

## Hierarchy

* **SDK**

### Index

#### Constructors

* [constructor](_sdk_.sdk.md#constructor)

#### Properties

* [api](_sdk_.sdk.md#api)
* [config](_sdk_.sdk.md#config)
* [getPayload](_sdk_.sdk.md#static-getpayload)

#### Accessors

* [loggedIn](_sdk_.sdk.md#loggedin)
* [payload](_sdk_.sdk.md#payload)

#### Methods

* [createCollection](_sdk_.sdk.md#createcollection)
* [createCollectionPreset](_sdk_.sdk.md#createcollectionpreset)
* [createField](_sdk_.sdk.md#createfield)
* [createItem](_sdk_.sdk.md#createitem)
* [createItems](_sdk_.sdk.md#createitems)
* [createPermissions](_sdk_.sdk.md#createpermissions)
* [createRelation](_sdk_.sdk.md#createrelation)
* [createRole](_sdk_.sdk.md#createrole)
* [deleteCollection](_sdk_.sdk.md#deletecollection)
* [deleteCollectionPreset](_sdk_.sdk.md#deletecollectionpreset)
* [deleteField](_sdk_.sdk.md#deletefield)
* [deleteItem](_sdk_.sdk.md#deleteitem)
* [deleteItems](_sdk_.sdk.md#deleteitems)
* [deleteRole](_sdk_.sdk.md#deleterole)
* [getActivity](_sdk_.sdk.md#getactivity)
* [getAllFields](_sdk_.sdk.md#getallfields)
* [getCollection](_sdk_.sdk.md#getcollection)
* [getCollectionPresets](_sdk_.sdk.md#getcollectionpresets)
* [getCollectionRelations](_sdk_.sdk.md#getcollectionrelations)
* [getCollections](_sdk_.sdk.md#getcollections)
* [getField](_sdk_.sdk.md#getfield)
* [getFields](_sdk_.sdk.md#getfields)
* [getFile](_sdk_.sdk.md#getfile)
* [getFiles](_sdk_.sdk.md#getfiles)
* [getInterfaces](_sdk_.sdk.md#getinterfaces)
* [getItem](_sdk_.sdk.md#getitem)
* [getItemRevisions](_sdk_.sdk.md#getitemrevisions)
* [getItems](_sdk_.sdk.md#getitems)
* [getLayouts](_sdk_.sdk.md#getlayouts)
* [getMe](_sdk_.sdk.md#getme)
* [getMyBookmarks](_sdk_.sdk.md#getmybookmarks)
* [getMyListingPreferences](_sdk_.sdk.md#getmylistingpreferences)
* [getMyPermissions](_sdk_.sdk.md#getmypermissions)
* [getPages](_sdk_.sdk.md#getpages)
* [getPermissions](_sdk_.sdk.md#getpermissions)
* [getRelations](_sdk_.sdk.md#getrelations)
* [getRole](_sdk_.sdk.md#getrole)
* [getRoles](_sdk_.sdk.md#getroles)
* [getSettings](_sdk_.sdk.md#getsettings)
* [getSettingsFields](_sdk_.sdk.md#getsettingsfields)
* [getThirdPartyAuthProviders](_sdk_.sdk.md#getthirdpartyauthproviders)
* [getUser](_sdk_.sdk.md#getuser)
* [getUsers](_sdk_.sdk.md#getusers)
* [login](_sdk_.sdk.md#login)
* [logout](_sdk_.sdk.md#logout)
* [ping](_sdk_.sdk.md#ping)
* [projectInfo](_sdk_.sdk.md#projectinfo)
* [refresh](_sdk_.sdk.md#refresh)
* [refreshIfNeeded](_sdk_.sdk.md#refreshifneeded)
* [requestPasswordReset](_sdk_.sdk.md#requestpasswordreset)
* [reset](_sdk_.sdk.md#reset)
* [revert](_sdk_.sdk.md#revert)
* [serverInfo](_sdk_.sdk.md#serverinfo)
* [updateCollection](_sdk_.sdk.md#updatecollection)
* [updateCollectionPreset](_sdk_.sdk.md#updatecollectionpreset)
* [updateDatabase](_sdk_.sdk.md#updatedatabase)
* [updateField](_sdk_.sdk.md#updatefield)
* [updateFields](_sdk_.sdk.md#updatefields)
* [updateItem](_sdk_.sdk.md#updateitem)
* [updateItems](_sdk_.sdk.md#updateitems)
* [updatePermissions](_sdk_.sdk.md#updatepermissions)
* [updateRelation](_sdk_.sdk.md#updaterelation)
* [updateRole](_sdk_.sdk.md#updaterole)
* [updateUser](_sdk_.sdk.md#updateuser)
* [uploadFiles](_sdk_.sdk.md#uploadfiles)

## Constructors

###  constructor

\+ **new SDK**(`options`: [IConfigurationOptions](../interfaces/_configuration_.iconfigurationoptions.md)): *[SDK](_sdk_.sdk.md)*

*Defined in [SDK.ts:76](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IConfigurationOptions](../interfaces/_configuration_.iconfigurationoptions.md) |

**Returns:** *[SDK](_sdk_.sdk.md)*

## Properties

###  api

• **api**: *[IAPI](../interfaces/_api_.iapi.md)*

*Defined in [SDK.ts:76](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L76)*

___

###  config

• **config**: *[IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [SDK.ts:75](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L75)*

___

### `Static` getPayload

▪ **getPayload**: *[getPayload](../modules/_utils_payload_.md#getpayload)* =  getPayload

*Defined in [SDK.ts:72](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L72)*

## Accessors

###  loggedIn

• **get loggedIn**(): *boolean*

*Defined in [SDK.ts:59](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L59)*

**Returns:** *boolean*

___

###  payload

• **get payload**(): *any*

*Defined in [SDK.ts:63](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L63)*

**Returns:** *any*

## Methods

###  createCollection

▸ **createCollection**(`data`: [ICollection](../interfaces/_schemes_directus_collection_.icollection.md)): *`Promise<ICollectionResponse>`*

*Defined in [SDK.ts:182](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L182)*

Create a collection

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ICollection](../interfaces/_schemes_directus_collection_.icollection.md) |

**Returns:** *`Promise<ICollectionResponse>`*

___

###  createCollectionPreset

▸ **createCollectionPreset**<**CollectionPreset**>(`data`: `CollectionPreset`): *`Promise<ICollectionPresetResponse<CollectionPreset>>`*

*Defined in [SDK.ts:232](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L232)*

Create a new collection preset (bookmark / listing preferences)

**`see`** https://docs.directus.io/api/reference.html#collection-presets

**Type parameters:**

▪ **CollectionPreset**: *[ICollectionPreset](../interfaces/_schemes_directus_collectionpreset_.icollectionpreset.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | `CollectionPreset` |

**Returns:** *`Promise<ICollectionPresetResponse<CollectionPreset>>`*

___

###  createField

▸ **createField**<**TFieldType**>(`collection`: string, `fieldInfo`: `TFieldType`): *`Promise<IFieldResponse<TFieldType>>`*

*Defined in [SDK.ts:333](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L333)*

Create a field in the given collection

**`see`** https://docs.directus.io/api/reference.html#fields-2

**Type parameters:**

▪ **TFieldType**: *[IField](../interfaces/_schemes_directus_field_.ifield.md)*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`fieldInfo` | `TFieldType` |

**Returns:** *`Promise<IFieldResponse<TFieldType>>`*

___

###  createItem

▸ **createItem**<**TItemType**>(`collection`: string, `body`: `TItemType`): *`Promise<IItemResponse<TItemType>>`*

*Defined in [SDK.ts:515](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L515)*

Create a new item

**Type parameters:**

▪ **TItemType**: *object*

Defining an item and its fields in object schema

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`body` | `TItemType` |

**Returns:** *`Promise<IItemResponse<TItemType>>`*

___

###  createItems

▸ **createItems**<**TItemsType**>(`collection`: string, `body`: [BodyType](../modules/_schemes_http_body_.md#bodytype)): *`Promise<IItemsResponse<TItemsType>>`*

*Defined in [SDK.ts:525](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L525)*

Create multiple items

**`see`** https://docs.directus.io/api/reference.html#create-items

**Type parameters:**

▪ **TItemsType**: *`Array<__type>`*

Defining an array of items, each in object schema

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`body` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |

**Returns:** *`Promise<IItemsResponse<TItemsType>>`*

___

###  createPermissions

▸ **createPermissions**<**TResponse**>(`data`: any[]): *`Promise<TResponse>`*

*Defined in [SDK.ts:662](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L662)*

TODO: Fix type-def for param and return
Create multiple new permissions

**Type parameters:**

▪ **TResponse**: *any[]*

Permissions type as array extending any[]

**Parameters:**

Name | Type |
------ | ------ |
`data` | any[] |

**Returns:** *`Promise<TResponse>`*

___

###  createRelation

▸ **createRelation**(`data`: [IRelation](../interfaces/_schemes_directus_relation_.irelation.md)): *`Promise<IRelationResponse>`*

*Defined in [SDK.ts:693](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L693)*

Creates new relation

**Parameters:**

Name | Type |
------ | ------ |
`data` | [IRelation](../interfaces/_schemes_directus_relation_.irelation.md) |

**Returns:** *`Promise<IRelationResponse>`*

___

###  createRole

▸ **createRole**<**TRole**>(`body`: `TRole`): *`Promise<IItemResponse<TRole>>`*

*Defined in [SDK.ts:784](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L784)*

Create a new user role

**Type parameters:**

▪ **TRole**: *[IRole](../interfaces/_schemes_directus_role_.irole.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | `TRole` |   |

**Returns:** *`Promise<IItemResponse<TRole>>`*

___

###  deleteCollection

▸ **deleteCollection**(`collection`: string): *`Promise<void>`*

*Defined in [SDK.ts:196](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L196)*

Deletes a certain collection

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |

**Returns:** *`Promise<void>`*

___

###  deleteCollectionPreset

▸ **deleteCollectionPreset**(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype)): *`Promise<void>`*

*Defined in [SDK.ts:260](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L260)*

Delete collection preset by primarykey

**`see`** https://docs.directus.io/api/reference.html#collection-presets

**Parameters:**

Name | Type |
------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) |

**Returns:** *`Promise<void>`*

___

###  deleteField

▸ **deleteField**(`collection`: string, `fieldName`: string): *`Promise<void>`*

*Defined in [SDK.ts:403](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L403)*

Delete a field from a collection

**`see`** @see https://docs.directus.io/api/reference.html#fields-2

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`fieldName` | string |

**Returns:** *`Promise<void>`*

___

###  deleteItem

▸ **deleteItem**(`collection`: string, `primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype)): *`Promise<void>`*

*Defined in [SDK.ts:564](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L564)*

Delete a single item by primary key

**`see`** https://docs.directus.io/api/reference.html#delete-items

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) |

**Returns:** *`Promise<void>`*

___

###  deleteItems

▸ **deleteItems**(`collection`: string, `primaryKeys`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype)[]): *`Promise<void>`*

*Defined in [SDK.ts:573](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L573)*

Delete multiple items by primary key

**`see`** https://docs.directus.io/api/reference.html#delete-items

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`primaryKeys` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype)[] |

**Returns:** *`Promise<void>`*

___

###  deleteRole

▸ **deleteRole**(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype)): *`Promise<void>`*

*Defined in [SDK.ts:792](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L792)*

Delete a user rol by primary key

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) |   |

**Returns:** *`Promise<void>`*

___

###  getActivity

▸ **getActivity**(`params`: `QueryParamsType`): *`Promise<IActivityResponse>`*

*Defined in [SDK.ts:144](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L144)*

Get activity

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IActivityResponse>`*

___

###  getAllFields

▸ **getAllFields**<**TFieldsType**>(`params`: `QueryParamsType`): *`Promise<IFieldsResponse<TFieldsType>>`*

*Defined in [SDK.ts:300](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L300)*

Get all fields that are in Directus

**`see`** https://docs.directus.io/api/reference.html#fields-2

**Type parameters:**

▪ **TFieldsType**: *[IField](../interfaces/_schemes_directus_field_.ifield.md)[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IFieldsResponse<TFieldsType>>`*

___

###  getCollection

▸ **getCollection**(`collection`: string, `params`: `QueryParamsType`): *`Promise<ICollectionResponse>`*

*Defined in [SDK.ts:175](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L175)*

Get collection info by name

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<ICollectionResponse>`*

___

###  getCollectionPresets

▸ **getCollectionPresets**<**TResponse**>(`params`: `QueryParamsType`): *`Promise<TResponse>`*

*Defined in [SDK.ts:208](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L208)*

Get the collection presets of the current user

**`see`** https://docs.directus.io/api/reference.html#collection-presets

**Type parameters:**

▪ **TResponse**: *any[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<TResponse>`*

___

###  getCollectionRelations

▸ **getCollectionRelations**(`collection`: string, `params`: `QueryParamsType`): *`Promise<any[]>`*

*Defined in [SDK.ts:708](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L708)*

TODO: Add type-def for return value(s)
Get the relationship information for the given collection

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<any[]>`*

___

###  getCollections

▸ **getCollections**(`params`: `QueryParamsType`): *`Promise<ICollectionsResponse[]>`*

*Defined in [SDK.ts:168](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L168)*

Get all available collections

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<ICollectionsResponse[]>`*

___

###  getField

▸ **getField**<**TFieldType**>(`collection`: string, `fieldName`: string, `params`: `QueryParamsType`): *`Promise<IFieldResponse<TFieldType>>`*

*Defined in [SDK.ts:321](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L321)*

Get the field information for a single given field

**`see`** https://docs.directus.io/api/reference.html#fields-2

**Type parameters:**

▪ **TFieldType**: *[IField](../interfaces/_schemes_directus_field_.ifield.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`fieldName` | string | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IFieldResponse<TFieldType>>`*

___

###  getFields

▸ **getFields**<**TFieldsType**>(`collection`: string, `params`: `QueryParamsType`): *`Promise<IFieldsResponse<TFieldsType>>`*

*Defined in [SDK.ts:310](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L310)*

Get the fields that have been setup for a given collection

**`see`** https://docs.directus.io/api/reference.html#fields-2

**Type parameters:**

▪ **TFieldsType**: *[IField](../interfaces/_schemes_directus_field_.ifield.md)[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IFieldsResponse<TFieldsType>>`*

___

###  getFile

▸ **getFile**<**TFile**>(`fileName`: `TFile`, `params`: `QueryParamsType`): *`Promise<TFile extends string ? IFileResponse<IFile> : IFilesResponse<IFile[]>>`*

*Defined in [SDK.ts:423](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L423)*

Get a certain file or certain file list from Directus

**`see`** https://docs.directus.io/api/reference.html#files

**Type parameters:**

▪ **TFile**: *string | string[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fileName` | `TFile` | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<TFile extends string ? IFileResponse<IFile> : IFilesResponse<IFile[]>>`*

___

###  getFiles

▸ **getFiles**(`params`: `QueryParamsType`): *`Promise<IFilesResponse>`*

*Defined in [SDK.ts:415](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L415)*

Get a list of available files from Directus

**`see`** https://docs.directus.io/api/reference.html#files

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IFilesResponse>`*

___

###  getInterfaces

▸ **getInterfaces**<**TResponse**>(): *`Promise<TResponse>`*

*Defined in [SDK.ts:272](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L272)*

Get the information of all installed interfaces

**`see`** https://docs.directus.io/api/reference.html#get-extensions

**Type parameters:**

▪ **TResponse**: *any[]*

**Returns:** *`Promise<TResponse>`*

___

###  getItem

▸ **getItem**<**TItemType**>(`collection`: string, `primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `params`: `QueryParamsType`): *`Promise<IItemResponse<TItemType>>`*

*Defined in [SDK.ts:551](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L551)*

Get a single item by primary key

**`see`** https://docs.directus.io/api/reference.html#get-item

**Type parameters:**

▪ **TItemType**: *object*

Defining fields of an item in object schema

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IItemResponse<TItemType>>`*

___

###  getItemRevisions

▸ **getItemRevisions**<**TDataAndDelta**>(`collection`: string, `primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `params`: `QueryParamsType`): *`Promise<IRevisionResponse<TDataAndDelta>>`*

*Defined in [SDK.ts:730](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L730)*

Get a single item's revisions by primary key

**`typeparam`** The data including delta type for the revision

**Type parameters:**

▪ **TDataAndDelta**: *object*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`collection` | string | - | - |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - | - |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IRevisionResponse<TDataAndDelta>>`*

___

###  getItems

▸ **getItems**<**TTItemsType**>(`collection`: string, `params`: `QueryParamsType`): *`Promise<IItemsResponse<TTItemsType>>`*

*Defined in [SDK.ts:538](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L538)*

Get items from a given collection

**`see`** https://docs.directus.io/api/reference.html#get-multiple-items

**`typeparam`** Defining an array of items, each in object schema

**Type parameters:**

▪ **TTItemsType**: *`Array<__type>`*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IItemsResponse<TTItemsType>>`*

___

###  getLayouts

▸ **getLayouts**<**TResponse**>(): *`Promise<TResponse>`*

*Defined in [SDK.ts:280](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L280)*

Get the information of all installed layouts

**`see`** https://docs.directus.io/api/reference.html#get-extensions

**Type parameters:**

▪ **TResponse**: *any[]*

**Returns:** *`Promise<TResponse>`*

___

###  getMe

▸ **getMe**<**User**>(`params`: `QueryParamsType`): *`Promise<IUserResponse<User>>`*

*Defined in [SDK.ts:841](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L841)*

Get the user info of the currently logged in user

**Type parameters:**

▪ **User**: *[IUser](../interfaces/_schemes_directus_user_.iuser.md)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IUserResponse<User>>`*

___

###  getMyBookmarks

▸ **getMyBookmarks**<**TResponse**>(`params`: `QueryParamsType`): *`Promise<TResponse>`*

*Defined in [SDK.ts:157](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L157)*

Get the bookmarks of the current user

**`deprecated`** Will be removed in the next major version, please use [SDK.getCollectionPresets](_sdk_.sdk.md#getcollectionpresets) instead

**`see`** https://docs.directus.io/advanced/legacy-upgrades.html#directus-bookmarks

**Type parameters:**

▪ **TResponse**: *any[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<TResponse>`*

___

###  getMyListingPreferences

▸ **getMyListingPreferences**<**TResponse**>(`collection`: string, `params`: `QueryParamsType`): *`Promise<TResponse>`*

*Defined in [SDK.ts:585](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L585)*

Get the collection presets of the current user for a single collection

**Type parameters:**

▪ **TResponse**: *any[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<TResponse>`*

___

###  getMyPermissions

▸ **getMyPermissions**<**TResponse**>(`params`: `QueryParamsType`): *`Promise<TResponse>`*

*Defined in [SDK.ts:653](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L653)*

TODO: Fix type-def for return
Get the currently logged in user's permissions

**Type parameters:**

▪ **TResponse**: *any[]*

Permissions type as array extending any[]

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<TResponse>`*

___

###  getPages

▸ **getPages**<**TResponse**>(): *`Promise<TResponse>`*

*Defined in [SDK.ts:288](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L288)*

Get the information of all installed pages

**`see`** https://docs.directus.io/api/reference.html#get-extensions

**Type parameters:**

▪ **TResponse**: *any[]*

**Returns:** *`Promise<TResponse>`*

___

###  getPermissions

▸ **getPermissions**(`params`: `QueryParamsType`): *`Promise<IItemsResponse<IPermission[]>>`*

*Defined in [SDK.ts:644](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L644)*

Get permissions

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IItemsResponse<IPermission[]>>`*

___

###  getRelations

▸ **getRelations**(`params`: `QueryParamsType`): *`Promise<IRelationsResponse>`*

*Defined in [SDK.ts:684](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L684)*

Get all relationships

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IRelationsResponse>`*

___

###  getRole

▸ **getRole**(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `params`: `QueryParamsType`): *`Promise<IRoleResponse>`*

*Defined in [SDK.ts:759](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L759)*

Get a single user role

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - | - |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IRoleResponse>`*

___

###  getRoles

▸ **getRoles**(`params`: `QueryParamsType`): *`Promise<IRoleResponse[]>`*

*Defined in [SDK.ts:767](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L767)*

Get the user roles

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IRoleResponse[]>`*

___

###  getSettings

▸ **getSettings**(`params`: `QueryParamsType`): *`Promise<ISettingsResponse>`*

*Defined in [SDK.ts:804](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L804)*

Get Directus' global settings

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<ISettingsResponse>`*

___

###  getSettingsFields

▸ **getSettingsFields**(`params`: `QueryParamsType`): *`Promise<IFieldsResponse<IField[]>>`*

*Defined in [SDK.ts:812](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L812)*

Get the "fields" for directus_settings

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IFieldsResponse<IField[]>>`*

___

###  getThirdPartyAuthProviders

▸ **getThirdPartyAuthProviders**(): *`Promise<any>`*

*Defined in [SDK.ts:897](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L897)*

TODO: Add response type-def
Get all the setup third party auth providers

**Returns:** *`Promise<any>`*

___

###  getUser

▸ **getUser**<**User**>(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `params`: `QueryParamsType`): *`Promise<IUserResponse<User>>`*

*Defined in [SDK.ts:833](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L833)*

Get a single Directus user

**Type parameters:**

▪ **User**: *[IUser](../interfaces/_schemes_directus_user_.iuser.md)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - | - |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IUserResponse<User>>`*

___

###  getUsers

▸ **getUsers**(`params`: `QueryParamsType`): *`Promise<IUsersResponse<IUser[]>>`*

*Defined in [SDK.ts:824](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L824)*

Get a list of available users in Directus

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`params` | `QueryParamsType` |  {} |   |

**Returns:** *`Promise<IUsersResponse<IUser[]>>`*

___

###  login

▸ **login**(`credentials`: [ILoginCredentials](../interfaces/_schemes_auth_login_.ilogincredentials.md), `options?`: [ILoginOptions](../interfaces/_schemes_auth_login_.iloginoptions.md)): *`Promise<ILoginResponse>`*

*Defined in [SDK.ts:89](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L89)*

Login to the API; Gets a new token from the API and stores it in this.api.token.

**Parameters:**

Name | Type |
------ | ------ |
`credentials` | [ILoginCredentials](../interfaces/_schemes_auth_login_.ilogincredentials.md) |
`options?` | [ILoginOptions](../interfaces/_schemes_auth_login_.iloginoptions.md) |

**Returns:** *`Promise<ILoginResponse>`*

___

###  logout

▸ **logout**(): *void*

*Defined in [SDK.ts:96](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L96)*

Logs the user out by "forgetting" the token, and clearing the refresh interval

**Returns:** *void*

___

###  ping

▸ **ping**(): *`Promise<string>`*

*Defined in [SDK.ts:871](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L871)*

Ping the API to check if it exists / is up and running, returns "pong"

**Returns:** *`Promise<string>`*

___

###  projectInfo

▸ **projectInfo**(): *`Promise<any>`*

*Defined in [SDK.ts:888](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L888)*

TODO: Add response type-def
Get the server info from the project

**Returns:** *`Promise<any>`*

___

###  refresh

▸ **refresh**(`token`: string): *`Promise<IRefreshTokenResponse>`*

*Defined in [SDK.ts:120](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L120)*

Use the passed token to request a new one

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *`Promise<IRefreshTokenResponse>`*

___

###  refreshIfNeeded

▸ **refreshIfNeeded**(): *`Promise<[boolean, Error]>`*

*Defined in [SDK.ts:113](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L113)*

Refresh the token if it is about to expire (within 30 seconds of expiry date).
- Calls onAutoRefreshSuccess with the new token if the refreshing is successful.
- Calls onAutoRefreshError if refreshing the token fails for some reason.

**Returns:** *`Promise<[boolean, Error]>`*

___

###  requestPasswordReset

▸ **requestPasswordReset**<**TResponse**>(`email`: string): *`Promise<TResponse>`*

*Defined in [SDK.ts:129](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L129)*

Request to reset the password of the user with the given email address.
The API will send an email to the given email address with a link to generate a new
temporary password.

**Type parameters:**

▪ **TResponse**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |

**Returns:** *`Promise<TResponse>`*

___

###  reset

▸ **reset**(): *void*

*Defined in [SDK.ts:103](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L103)*

Resets the client instance by logging out and removing the URL and project

**Returns:** *void*

___

###  revert

▸ **revert**(`collection`: string, `primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `revisionID`: number): *`Promise<void>`*

*Defined in [SDK.ts:745](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L745)*

Revert an item to a previous state

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | string | - |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - |
`revisionID` | number |   |

**Returns:** *`Promise<void>`*

___

###  serverInfo

▸ **serverInfo**(): *`Promise<IServerInformationResponse>`*

*Defined in [SDK.ts:879](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L879)*

Get the server info from the API

**Returns:** *`Promise<IServerInformationResponse>`*

___

###  updateCollection

▸ **updateCollection**(`collection`: string, `data`: `Partial<ICollection>`): *`Promise<ICollectionResponse>`*

*Defined in [SDK.ts:189](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L189)*

Updates a certain collection

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`data` | `Partial<ICollection>` |

**Returns:** *`Promise<ICollectionResponse>`*

___

###  updateCollectionPreset

▸ **updateCollectionPreset**<**PartialCollectionPreset**, **TResultCollectionPreset**>(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `data`: [IUpdateCollectionPresetBody](../interfaces/_schemes_request_collection_.iupdatecollectionpresetbody.md)): *`Promise<ICollectionPresetResponse<PartialCollectionPreset & TResultCollectionPreset>>`*

*Defined in [SDK.ts:243](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L243)*

Update collection preset (bookmark / listing preference)

**`see`** https://docs.directus.io/api/reference.html#collection-presets

**Type parameters:**

▪ **PartialCollectionPreset**: *`Partial<ICollectionPreset>`*

▪ **TResultCollectionPreset**: *[ICollectionPreset](../interfaces/_schemes_directus_collectionpreset_.icollectionpreset.md)*

**Parameters:**

Name | Type |
------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) |
`data` | [IUpdateCollectionPresetBody](../interfaces/_schemes_request_collection_.iupdatecollectionpresetbody.md) |

**Returns:** *`Promise<ICollectionPresetResponse<PartialCollectionPreset & TResultCollectionPreset>>`*

___

###  updateDatabase

▸ **updateDatabase**(): *`Promise<void>`*

*Defined in [SDK.ts:863](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L863)*

This will update the database of the API instance to the latest version
using the migrations in the API

**Returns:** *`Promise<void>`*

___

###  updateField

▸ **updateField**<**TFieldType**>(`collection`: string, `fieldName`: string, `fieldInfo`: `TFieldType`): *`Promise<IFieldResponse<IField & TFieldType> | undefined>`*

*Defined in [SDK.ts:344](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L344)*

Update a given field in a given collection

**`see`** https://docs.directus.io/api/reference.html#fields-2

**Type parameters:**

▪ **TFieldType**: *`Partial<IField>`*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`fieldName` | string |
`fieldInfo` | `TFieldType` |

**Returns:** *`Promise<IFieldResponse<IField & TFieldType> | undefined>`*

___

###  updateFields

▸ **updateFields**<**TFieldsType**>(`collection`: string, `fields`: `Array<Partial<IField>>`): *`Promise<IFieldsResponse<TFieldsType & IField[]> | undefined>`*

*Defined in [SDK.ts:378](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L378)*

Update multiple fields at once

**`see`** https://docs.directus.io/api/reference.html#fields-2

**`example`** 

// Set multiple fields to the same value
updateFields("projects", ["first_name", "last_name", "email"], {
  default_value: ""
})

// Set multiple fields to different values
updateFields("projects", [
  {
    id: 14,
    sort: 1
  },
  {
    id: 17,
    sort: 2
  },
  {
    id: 912,
    sort: 3
  }
])

**Type parameters:**

▪ **TFieldsType**: *[IField](../interfaces/_schemes_directus_field_.ifield.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`fields` | `Array<Partial<IField>>` |

**Returns:** *`Promise<IFieldsResponse<TFieldsType & IField[]> | undefined>`*

▸ **updateFields**<**TFieldsType**>(`collection`: string, `fields`: string[], `fieldInfo`: `Partial<IField>`): *`Promise<IFieldsResponse<TFieldsType & IField[]> | undefined>`*

*Defined in [SDK.ts:382](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L382)*

**Type parameters:**

▪ **TFieldsType**: *[IField](../interfaces/_schemes_directus_field_.ifield.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`fields` | string[] |
`fieldInfo` | `Partial<IField>` |

**Returns:** *`Promise<IFieldsResponse<TFieldsType & IField[]> | undefined>`*

___

###  updateItem

▸ **updateItem**<**TTPartialItem**, **TTResult**>(`collection`: string, `primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `body`: `TTPartialItem`, `params`: `QueryParamsType`): *`Promise<IItemResponse<TTPartialItem & TTResult>>`*

*Defined in [SDK.ts:484](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L484)*

Update an existing item

**`see`** https://docs.directus.io/api/reference.html#update-item

**Type parameters:**

▪ **TTPartialItem**: *object*

Defining the item type in object schema

▪ **TTResult**: *object*

Extension of [TPartialItem] as expected result

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - |
`body` | `TTPartialItem` | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IItemResponse<TTPartialItem & TTResult>>`*

___

###  updateItems

▸ **updateItems**<**TPartialItem**, **TResult**>(`collection`: string, `body`: `TPartialItem`, `params`: `QueryParamsType`): *`Promise<IItemsResponse<TPartialItem & TResult>>`*

*Defined in [SDK.ts:501](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L501)*

Update multiple items

**`see`** https://docs.directus.io/api/reference.html#update-items

**Type parameters:**

▪ **TPartialItem**: *object[]*

Defining an array of items, each in object schema

▪ **TResult**: *`TPartialItem`*

Extension of [TPartialItem] as expected result

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection` | string | - |
`body` | `TPartialItem` | - |
`params` | `QueryParamsType` |  {} |

**Returns:** *`Promise<IItemsResponse<TPartialItem & TResult>>`*

___

###  updatePermissions

▸ **updatePermissions**<**TResponse**>(`data`: any[]): *`Promise<TResponse>`*

*Defined in [SDK.ts:671](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L671)*

TODO: Fix type-def for param and return
Update multiple permission records

**Type parameters:**

▪ **TResponse**: *any[]*

Permissions type as array extending any[]

**Parameters:**

Name | Type |
------ | ------ |
`data` | any[] |

**Returns:** *`Promise<TResponse>`*

___

###  updateRelation

▸ **updateRelation**(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `data`: `Partial<IRelation>`): *`Promise<IRelationResponse>`*

*Defined in [SDK.ts:700](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L700)*

Updates existing relation

**Parameters:**

Name | Type |
------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) |
`data` | `Partial<IRelation>` |

**Returns:** *`Promise<IRelationResponse>`*

___

###  updateRole

▸ **updateRole**<**Role**>(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `body`: `Role`): *`Promise<IItemResponse<Role & IRole>>`*

*Defined in [SDK.ts:776](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L776)*

Update a user role

**Type parameters:**

▪ **Role**: *`Partial<IRole>`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) | - |
`body` | `Role` |   |

**Returns:** *`Promise<IItemResponse<Role & IRole>>`*

___

###  updateUser

▸ **updateUser**<**User**>(`primaryKey`: [PrimaryKeyType](../modules/_sdk_.md#primarykeytype), `body`: `User`): *`Promise<IItemResponse<User & IUser>>`*

*Defined in [SDK.ts:850](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L850)*

Update a single user based on primaryKey

**Type parameters:**

▪ **User**: *`Partial<IUser>`*

**Parameters:**

Name | Type |
------ | ------ |
`primaryKey` | [PrimaryKeyType](../modules/_sdk_.md#primarykeytype) |
`body` | `User` |

**Returns:** *`Promise<IItemResponse<User & IUser>>`*

___

###  uploadFiles

▸ **uploadFiles**<**TResponse**>(`data`: object, `onUploadProgress`: function): *`Promise<TResponse>`*

*Defined in [SDK.ts:435](https://github.com/direcuts/sdk-js/tree/master/SDK.ts#L435)*

Upload multipart files in multipart/form-data

**`see`** https://docs.directus.io/api/reference.html#files

**Type parameters:**

▪ **TResponse**: *any*

**Parameters:**

▪ **data**: *object*

▪`Default value`  **onUploadProgress**: *function*=  () => ({})

▸ (): *object*

**Returns:** *`Promise<TResponse>`*