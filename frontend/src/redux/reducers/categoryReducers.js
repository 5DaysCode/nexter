import {
  CATEGORY_LIST_QUERY_SUCESS,
  CATEGORY_LIST_QUERY,
  CATEGORY_LIST_QUERY_FAIL,
} from "../constants/categoryConstants";

  export const categoryListReducer = (state = { categorys: [] }, action) => {
    switch (action.type) {
      case CATEGORY_LIST_QUERY:
        return { categorys: [] };
      case CATEGORY_LIST_QUERY_SUCESS:
        return { categorys: action.payload };
      case CATEGORY_LIST_QUERY_FAIL:
        return { error: action.payload };

      default:
        return state;
   }
  };


//For test purporses only
// export const categoryListReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "CATEGORY_LIST_QUERY_SUCESS":
//       return {
//          categorys: action.payload
//       };
//     default:
//       return state;
//   }
// };