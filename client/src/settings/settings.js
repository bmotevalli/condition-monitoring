import Home from "../containers/Home/Home";
import MapPage from "../containers/Map/MapPage";

export const ROUTES = {
  MAINVIEW: {
    MAP: { PATH: "/googlemap", COMP: MapPage },
    HOME: { PATH: "/home", COMP: Home }
  }
};

export const SIDE_MENU = {
  CLOSED: "50px",
  OPENED: "150px"
};

export const SENSE_TYPES = {
  PRES: "pressure",
  TEMP: "temperature",
  VIBR: "vibration"
};
