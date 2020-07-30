export interface userDetails {
    show: boolean,
    userPeriods: Array<userDetailPeriods>
}

export interface userDetailPeriods {
    start_time: string,
    end_time: string
}