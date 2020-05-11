import { UPDATE_COVER_LETTER_STRING } from "./actionTypes";

export const updateCoverLetterString = content => ({
    type: UPDATE_COVER_LETTER_STRING,
    payload: content
  });
