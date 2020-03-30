import { UPDATE_STRING } from "../actionTypes";

const initialState = {
    UserName: "Sam Smith",
    companyName: "SDG",
    positionInCompany: "Random Coder",
    paragraphOneDropDown: "what you do",
    paragraphOneFillIn: "BlOoD",
    signOff: "With regards",
    techShared: "Charzard, Pikachu, Squirtal",
    phoneNumber: "727-867-5609",
    email: "fake_email@sdg.com",
    userPortfolio: "https://suncoast.io",
    headerDate: "unknown",
    userStartedDeveloping: "unknown",
  };

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STRING: {
      const { property } = action.payload;
      return {
        ...state,
        byPropertys: {
          ...state.byPropertys,
          [property]: {
            ...state.byPropertys[property],

          }
        }
      };
    }
    default:
      return state;
  }
}
