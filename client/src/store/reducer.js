import * as actionTypes from "./action";

const initialState = {
  isSideMenuExpanded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEMENU:
      const isExpanded = !state.isSideMenuExpanded;
      return {
        ...state,
        isSideMenuExpanded: isExpanded,
      };
  }

  return state;
};

export default reducer;
