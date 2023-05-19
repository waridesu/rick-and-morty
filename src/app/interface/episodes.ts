import { Character } from "./character";

export interface Episode {
  air_date: string;
  characters: string[] | Character[]
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}






