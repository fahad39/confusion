import * as ActionTypes from "./ActionTypes";

export const dishes = (
  state = {
    isloading: true,
    errMess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isloading: false,
        errMess: null,
        dishes: action.payload,
      };
    case ActionTypes.DISHES_LOADING:
      return { ...state, isloading: true, errMess: null, dishes: [] };
    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isloading: false,
        errMess: action.payload,
        dishes: [],
      };
    default:
      return state;
  }
};
