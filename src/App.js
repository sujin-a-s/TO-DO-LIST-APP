import { Provider } from "react-redux";
import MainPage from "./Components/MainPage";
import appStore from "./utils/store";




function App() {
  return (
    <Provider store={appStore}>
      <div>
        <MainPage/>
      </div>
    </Provider>
  );
}

export default App;
