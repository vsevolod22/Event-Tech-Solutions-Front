type TYear = `${number}${number}${number}${number}`;
type TMonth = `${number}${number}`;
type TDay = `${number}${number}`;
type THours = `${number}${number}`;
type TMinutes = `${number}${number}`;
type TSeconds = `${number}${number}`;
type TOffset = `${number}${number}:${number}${number}`;

export type TDateISO =
  `${TYear}-${TMonth}-${TDay}T${THours}:${TMinutes}:${TSeconds}${TOffset}`;

export interface IAuth {
  username: string;
  email: string;
  password: string;
}

export interface IEventComment {
  id: string;
  name: string;
  place: string;
  time_end: TDateISO;
  time_start: TDateISO;
  image: string;
  type: {
    id: number;
    name: string;
  };
}

export interface IComment {
  id: string;
  user: IUser;
  event: IEventComment;
  comment: string;
  created_at: TDateISO;
}

export interface ILogin {
  access: string;
  refresh: string;
  user: AllUserInfo;
}

export interface AllUserInfo {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
  job: string | null;
  vk: string | null;
  telegram: string | null;
  mail: string | null;
  phone_number: string;
  group: { name: string; id: number };
  groups: AllUserInfo["group"][];
}

export interface AllMeetings {
  meet: IMeet[];
}

export interface IUser {
  avatar: string;
  last_name: string;
  id: number;
  first_name: string;
  userName: string;
}
export interface IUsers {
  id: number;
  state: number;
  user: AllUserInfo;
}

export interface IPostMeet {
  name: string;
  event_type: number;
  place: string;
  time_end: TDateISO;
  time_start: TDateISO;
  speaker: number;
  reference: string;
  reference_video: string;
  is_online: boolean;
  description: string;
  image?: string;
}

export interface IPostUser {
  username: string;
  password: string;
  job: string;
  avatar?: string;
  vk?: string;
  telegram?: string;
  mail?: string;
  phone_number?: string;
}

export interface IMeet {
  id: string;
  description: string;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  managers: [];
  name: string;
  participants: IUser;
  place: string;
  reference?: string | number;
  reference_video?: string;
  speaker: IUser;
  time_end: TDateISO;
  time_start: TDateISO;
  type: {
    id: number;
    name: string;
  };
  user_state: number;
  image: string;
  is_upcoming: boolean;
  is_online: boolean;
}
export interface INotification {
  state: number;
  time: TDateISO;
  event: IMeet;
  description: string;
}
export interface IType {
  id: number;
  name: string;
}
