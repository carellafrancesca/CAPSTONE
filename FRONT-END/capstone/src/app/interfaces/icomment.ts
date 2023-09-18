import { IUser } from "./iuser";

export interface Icomment {
  id: number;
  "author" : IUser;
  "commentText": string;
  "commentDate": Date;
  "eventId": number;
}
