import { IConcertData } from "./iconcert-data";

export interface Icomment {
  id?: number;
  usernameAuthor?: string;
  commentText?: string;
  commentDate?: Date;
  concert?: IConcertData;
}
