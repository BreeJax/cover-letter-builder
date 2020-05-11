import { UPDATE_COVER_LETTER_STRING } from "../actionTypes";

const initialState = {
  //AboutYou
  UserName: "",
  userPortfolio: "",
  phoneNumber: "",
  email: "",
  //AboutTheCompany
  companyName: "",
  positionInCompany: "",
  //WhyWorkThere
  paragraphOneFillIn: "",


  signOff: "With regards",
  techShared: "Charzard, Pikachu, Squirtal",
  headerDate: "unknown",
  userStartedDeveloping: "unknown"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COVER_LETTER_STRING: {
      const { property, value } = action.payload;
      console.log("property of update");
      console.log(property);
      return {
        ...state,
        [property]: value
      };
    }
    default:
      return state;
  }
}
