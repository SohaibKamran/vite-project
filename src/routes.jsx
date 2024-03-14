import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Productdetail from "./pages/ProductDetail";
import Header from "./components/header";

export const routes = [
  {
    path: "/",
    element:<Header/>,
    children : [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/checkout",
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