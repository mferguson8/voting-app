import { configureStore } from "redux";
import reducer from "./reducer";

export default function makeStore() {
    return configureStore(reducer);
};