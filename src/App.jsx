import Slides from "./slides/Slides";
import configStore from "./store/store";
import { Provider } from "react-redux";

function App() {
  const store = configStore();
  return (
    <Provider store={store}>
      <div className="App">
        <Slides/>
      </div>
    </Provider>
  );
}

export default App;
