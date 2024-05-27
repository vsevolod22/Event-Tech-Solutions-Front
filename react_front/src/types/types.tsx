type TYear         = `${number}${number}${number}${number}`;
type TMonth        = `${number}${number}`;
type TDay          = `${number}${number}`;
type THours        = `${number}${number}`;
type TMinutes      = `${number}${number}`;
type TSeconds      = `${number}${number}`;
type TOffset       = `${number}${number}:${number}${number}`;

export type TDateISO = `${TYear}-${TMonth}-${TDay}T${THours}:${TMinutes}:${TSeconds}${TOffset}`;



export interface IAuth {
    userName: string;
    email: string;
    password: string;
}

export interface IEventComment {
    id: string,
    name: string,
    place: string,
    time_end: TDateISO,
    time_start: TDateISO,
    image: string,
    type: {
        id: number,
        name: string,
    }

}



export interface IComment {
    id: string,
    user: IUser,
    event: IEventComment,
    comment: string,
    created_at: TDateISO,
}


export interface AllUserInfo {
    role: string;
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    avatar: string;
    job: string;
    vk: string;
    telegram: string;
    mail: string;
    phone_number: string;
    groups: string[];
    access: string | null
}


export interface AllMeetings {
    meet: IMeet[]
}

export interface IUser {
    avatar: string,
    last_name: string,
    id: number,
    first_name: string,
    userName: string,
}

export interface IMeet {
    id: string,
    description: string,
    duration: {
        hours: number,
        minutes: number,
        seconds: number
    },
    managers: [],
    name: string,
    participants: IUser,
    place: string,
    reference?: string | number,
    reference_video?: string,
    speaker: IUser,
    time_end: TDateISO,
    time_start: TDateISO,
    type: {
        id: number,
        name: string,
    }
    user_state: number,
    image: string,
    is_upcoming: boolean,




}