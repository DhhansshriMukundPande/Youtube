import "./index.css"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";
import store from "./utils/Store.js"
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer.js"
import WatchPage from "./Components/WatchPage.js"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: < WatchPage/>,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store ={store}>
    <div>
     
      <Header/>
      <RouterProvider router ={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
