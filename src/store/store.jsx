import { createStore } from "redux";
import reducer from "./reducers/";

export default function configStore() {
  return createStore(reducer);
}