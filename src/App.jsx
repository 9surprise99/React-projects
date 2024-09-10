import { useEffect, useState } from "react";
import Slides from "./components/slides/Slides";
import configStore from "./store/store";
import { Provider } from "react-redux";
import "./styles.css";
import "./media.css";

export default function App() {
  const store = configStore();

  return (
    <Provider store={store}>
      <div className="quiz">
        <Slides />
      </div>
    </Provider>
  );
}
