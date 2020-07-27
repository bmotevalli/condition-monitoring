import Home from "../containers/Home/Home";
import GoogleMap from "../containers/Map/Map";

export const ROUTES = {
  MAINVIEW: {
    MAP: { PATH: "/googlemap", COMP: GoogleMap },
    HOME: { PATH: "/home", COMP: Home }
  }
};

export const SIDE_MENU = {
  CLOSED: "50px",
  OPENED: "150px"
};

export const API_KEYS = {
  GOOGLE_MAP: "AIzaSyABlIaBLTXjUr0g9e4R-50WIgbCoHYXvk4"
};
