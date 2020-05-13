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
  //signOff
  signOff: "",
  //HeaderDate
  headerDate: "",
  //techShared
  techShared: "",
  //StartedDeveloping
  userStartedDeveloping: ""
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
