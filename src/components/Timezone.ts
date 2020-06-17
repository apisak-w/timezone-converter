export interface ITimezone {
    key: string, name: string
}

export interface IUserTimezone extends ITimezone {
    isMainLocation: boolean
}