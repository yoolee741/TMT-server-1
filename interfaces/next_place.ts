/*
import { Place } from "./place";

export interface aa {
  place: String;
  like: Number;
}
*/
export interface Next_Place {
  place_name: String;
  next_place: { [key: string]: number };
}
