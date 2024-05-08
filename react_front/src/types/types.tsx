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
}


export interface AllMeetings {
    meet: IMeet[]
}

export interface IUser {
    avatar: string,
    firstName: string,
    id: number,
    lastName: string,
    userName: string,
}

export interface IMeet {
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
    userState: number




}