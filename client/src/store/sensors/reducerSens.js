import * as actionTypes from "./actionSens";
import * as Api from "../../api/fakeApi/fakeMach";

const initialState = {
  sensors: [],
  selectedSens: null
};

const reducer = (state = initialState, action) => {
  let prevState = null;

  switch (action.type) {
    case actionTypes.GET_ALL_SENSORS:
      const sensors = Api.getAllSensors(action.machID);
      prevState = { ...state };
      prevState.sensors = sensors;
      return prevState;

    case actionTypes.GET_SENSOR_BY_ID:
      const selectedSens = Api.getSensorsById(
        action.selectedMach,
        action.sensId
      );
      prevState = { ...state };
      prevState.selectedSens = selectedSens;
      return prevState;
  }

  return state;
};

export default reducer;
