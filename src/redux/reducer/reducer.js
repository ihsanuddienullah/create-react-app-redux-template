import { GET_DATA } from "../actions/action-type";
import { combineReducers } from "redux";

const initialState = {
  data: "",
};

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default combineReducers({
  dataReducer: getDataReducer,
});
