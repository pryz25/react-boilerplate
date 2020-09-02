import { NEW_STRING } from './constants';

export function changeString(newString) {
  return {
    type: NEW_STRING,
    newString,
  };
}
