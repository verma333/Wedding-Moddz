import { CITY  , CATEGORY ,CITYPROFILE} from "../actions/types";



const initialState = {
    city:null,
    category:null,
    cityProfie:null
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
        case CITYPROFILE:
          return {
            ...state,
            cityProfie:  action.payload,
         
          };
      
   
    default:
      return state;
  }
}
