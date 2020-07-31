import * as actionTypes from "./actionMach";
import * as Api from "../../api/fakeApi/fakeMach";
// const cloneDeep = require("lodash/clonedeep");

const initialState = {
  machSummary: [],
  selectedMach: null
};

const reducer = (state = initialState, action) => {
  let prevState = null;

  switch (action.type) {
    case actionTypes.GET_ALL_MACHS_GENERAL:
      const machines = Api.getAllMachines();
      //   prevState = cloneDeep(state);
      prevState = { ...state };
      prevState.machSummary = machines;
      return prevState;

    case actionTypes.GET_MACH_BY_ID:
      const selectedMachine = Api.getMachineById(action.machId);
      //   prevState = cloneDeep(state);
      prevState = { ...state };
      prevState.selectedMach = selectedMachine;
      return prevState;
  }

  return state;
};

export default reducer;
