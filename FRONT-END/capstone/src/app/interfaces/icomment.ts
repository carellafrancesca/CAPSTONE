import { IUser } from "./iuser";

export interface Icomment {
  id?: number;
  user : IUser;
  commentText: string;
  commentDate: Date;
  eventId: number;
}
