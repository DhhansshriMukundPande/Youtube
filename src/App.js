import "./index.css"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";
import store from "./utils/Store.js"
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store ={store}>
    <div>
     
      <Header/>
      <Body />
    </div>
    </Provider>
  );
}

export default App;
