import { Routes, Route } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";
import { BaseTemplate } from "./templates";

export function App() {
  return (
    <>
      <Routes>
        {/* Route nesting */}
        {/* 1. Sử dụng chung template. (không cần path) */}
        <Route element={<BaseTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="new-product" element={<NewProduct />}></Route>
          <Route path="list-product" element={<ListProduct />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </>
  );
}
