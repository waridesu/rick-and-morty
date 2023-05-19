import { Character } from "../interface/character";

export function isCharacterArray(array: any[]): array is Character[] {
  return array.every(item =>
    typeof item === 'object' &&
    'id' in item &&
    'name' in item &&
    'status' in item &&
    'species' in item &&
    'type' in item &&
    'gender' in item &&
    'origin' in item &&
    'location' in item &&
    'image' in item &&
    'episode' in item &&
    'url' in item &&
    'created' in item
  );
}

