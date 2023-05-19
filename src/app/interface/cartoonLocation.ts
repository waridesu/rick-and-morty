import { Character } from "./character";

export interface cartoonLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[] | Character[];
  url: string;
  created: string;
}
