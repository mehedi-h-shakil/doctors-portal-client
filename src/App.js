import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
