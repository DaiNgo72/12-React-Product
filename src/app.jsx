import { Routes, Route, Outlet } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";
import { BaseTemplate } from "./templates";
import { NestComponent } from "./pages/nest-component";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./redux/color.slice";

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

      <Routes>
        <Route path="nest-component" element={<NestComponent />}></Route>
      </Routes>

      {/* <CauHoi2>
        <p>Child 2</p>
      </CauHoi2> */}

      <ChangeColor />
    </>
  );
}

function ChangeColor() {
  const color = useSelector((store) => {
    return store.colorReducer.current;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-[100px] h-[100px]"
        style={{
          backgroundColor: color,
        }}
      ></div>

      <button
        onClick={() => {
          dispatch(changeColor("red"));
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          dispatch(changeColor("green"));
        }}
      >
        green
      </button>
      <button
        onClick={() => {
          dispatch(changeColor("blue"));
        }}
      >
        blue
      </button>
    </>
  );
}
