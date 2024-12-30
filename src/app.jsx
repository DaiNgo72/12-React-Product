import { Routes, Route } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";

export function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="new-product" element={<NewProduct />}></Route>
        <Route path="list-product" element={<ListProduct />}></Route>
        <Route path="product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}
