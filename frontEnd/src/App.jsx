import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Topbar from "./Components/Topbar.jsx"
import { PaintingsInStock } from "./Components/PaintingsInStock.jsx";
import PaintingsNew from "./Components/PaintingsNew.jsx";
import PaintingsToOrder from "./Components/PaintingsToOrder.jsx"; 
import Hero from "./Components/Hero.jsx";
import CategoryList from "./Components/CategoryList.jsx";

const Root = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <PaintingsNew />,
      },
      {
        path: "paintingsInStock",
        element: <PaintingsInStock />,
      },
      {
        path: "paintingsToOrder",
        element: <PaintingsToOrder />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Hero />
      <CategoryList />
    </>
    
  )
  
  
}

export default App
