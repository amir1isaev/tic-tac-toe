import { IGetThemeType, IGetMessageType, IStartGetMessageType } from './actions'
export { default as EStorageAction } from './types'
export type { default as IStorageState } from './state'

export type StorageAction = IGetThemeType | IGetMessageType | IStartGetMessageType
