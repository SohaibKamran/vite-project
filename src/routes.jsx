import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Productdetail from "./pages/ProductDetail";

export const routes = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/checkout",
      element:<Checkout/>,
    },
    {
      path: "/product",
      element: <Productdetail/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    
  ]