import Home from "./pages/Home";

export const routes = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/checkout",
      element: <div>Hello checkout!</div>,
    },
    {
      path: "/productDetails",
      element: <div>Hello productDetails!</div>,
    },
    {
      path: "/cart",
      element: <div>Hello cart!</div>,
    },
    
  ]