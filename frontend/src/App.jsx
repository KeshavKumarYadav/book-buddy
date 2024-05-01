import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesPage from "./pages/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div className="">
      <Header />
      <main className="">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
