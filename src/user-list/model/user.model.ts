export interface Userlist {
    members: Array<Activity_objects>,
    show: boolean
    activity_periods: Array<activitys>
}

export interface Activity_objects {
    id: string,
    real_name: string,
    tz: string,
    activity_periods: Array<activitys>;
}

interface activitys {
    start_time: string,
    end_time: string
}