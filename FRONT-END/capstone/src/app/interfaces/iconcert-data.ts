import { Icomment } from "./icomment";
import { Ilocation } from "./ilocation";

export interface IConcertData {
  "id": number;
  "concertName" : string;
  "eventDate" : Date;
  "location" : Ilocation;
  "comments": Icomment[];
}
