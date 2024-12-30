import { Link, NavLink, Outlet, useMatch } from "react-router";

export function BaseTemplate() {
  // Kiểm tra xem thử URL của mình có khớp với những pathname này hay không, nếu có thì trả về giá trị, không phải boolean.
  const isMatchNewProduct = useMatch("/new-product");
  const isMatchListProduct = useMatch("/list-product");
  const isMatchProductDetail = useMatch("/product/:id");

  const match = isMatchListProduct || isMatchNewProduct || isMatchProductDetail;

  console.log("match", match);

  return (
    <div
      className="grid bg-gray-400 min-h-screen"
      style={{ gridTemplateColumns: "200px 1fr" }}
    >
      <div className="h-full bg-white">
        <Link to={"/"}>
          <h1>
            <i className="fa-solid fa-house"></i>
            Dashboard
          </h1>
        </Link>

        <NavLink
          className={match ? "bg-black text-white" : ""}
          to={"/list-product"}
        >
          Products
        </NavLink>
      </div>

      <div>
        {/* Binding những component con nesting */}
        <Outlet />
      </div>
    </div>
  );
}
