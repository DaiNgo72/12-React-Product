import { Routes, Route, Outlet } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";
import { BaseTemplate } from "./templates";
import { NestComponent } from "./pages/nest-component";

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

        <Route path="cau-hoi" element={<CauHoi></CauHoi>}>
          {/* /cau-hoi/:id */}
          {/* /cau-hoi/1 */}
          {/* /cau-hoi/2 */}
          {/* /cau-hoi/3 */}

          {/* /cau-hoi/3/4 ❌ */}
          <Route path=":id" element={<p>child 1</p>}></Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="nest-component" element={<NestComponent />}></Route>
      </Routes>

      {/* <CauHoi2>
        <p>Child 2</p>
      </CauHoi2> */}
    </>
  );
}

function CauHoi() {
  return (
    <>
      <h1>Cau hoi</h1>

      {/* Render component tai day */}
      <Outlet />
    </>
  );
}

function CauHoi2({ children }) {
  return (
    <>
      <h1>Cau hoi 2</h1>

      {/* Render component tai day */}
      {/* <p>Child 2</p> */}

      {children}
    </>
  );
}
