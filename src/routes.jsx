import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Productdetail from "./pages/ProductDetail";
import Header from "./components/header";
import Login from "./pages/login";
import Register from "./pages/register";

export const routes = [
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    
    path: "/",
    element:<Header/>,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout1",
        element: <Checkout />,
      },
      {
        path: "/product-detail/:id",
        element: <Productdetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
  }
  

]