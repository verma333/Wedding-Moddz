import { CITY  , CATEGORY} from "../actions/types";



const initialState = {
    city:null,
    category:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CITY:
      return {
        ...state,
    city:  action.payload,
     
      };
      case CATEGORY:
        return {
          ...state,
      category:  action.payload,
       
        };
      
   
    default:
      return state;
  }
}
