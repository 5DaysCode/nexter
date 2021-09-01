import axios from "axios";
import {
  CATEGORY_LIST_QUERY,
  CATEGORY_LIST_QUERY_SUCESS,
  CATEGORY_LIST_QUERY_FAIL,
} from "../constants/categoryConstants";

export const listOfCategorys = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_QUERY });
    const { data } = await axios.get("/api/category");
    dispatch({
      type: CATEGORY_LIST_QUERY_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_QUERY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



  //for testing purposes only
// export const listOfCategorys = () => async(dispatch) => {
//   const { data } = await axios.get("/api/category"); 
//   dispatch({
//          type: CATEGORY_LIST_QUERY_SUCESS,
//          payload: data
//     });

// } 

