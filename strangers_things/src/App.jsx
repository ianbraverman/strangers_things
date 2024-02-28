import { RouterProvider } from "react-router-dom";
import store from "./store/store";
import "./App.css";
import { Provider } from "react-redux";
import router from "./layout/router";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
