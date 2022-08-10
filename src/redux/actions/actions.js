import { GET_DATA } from "./action-type";

export const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA, payload: "Hello World!" });
};
