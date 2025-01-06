# Upgrade to latest version
npm i react@latest react-dom@latest vite@latest

# Upgrade devDependencies to latest version
npm i @types/react@latest @types/react-dom@latest eslint@latest eslint-plugin-react-hooks@latest eslint-plugin-react-refresh@latest -D

# Prettier
- Format code

# Eslint
- Đưa những quy tắc code
- vd: cách đặt tên biến, cách đặt tên function, ...

# StrictMode
- Chỉ có công dụng ở môi trường dev
- làm useEffect chạy 2 lần.

# Outlet
- Để hiển thị những thành phần con lồng bên trong thẻ Route

# Children

# Async Await
- Sử dụng để đợi 1 *promise* bên trong 1 *function*
- Không được sử dụng async tại callback của useEffect.

# IIFE
- Tạo và thực thi function ngay tức thì
```js
const abc = () => {
    // code trong function abc
};
// để gọi function abc
abc();

// --------

(() => {
    // thực thi function ngay tức thì
})();

```

# Install formik
- npm install formik --save
- Xử lý form

# Install yup
- npm i yup
- Validate dữ liệu kết hợp với formik

# formik
- prop name của input là gì thì initialValues của formik phải tương tự, 2 cái phải khớp với nhau.

# Cache 
- Tối ưu
- Nâng cao

# useCallback
- useCallback is a React Hook that lets you cache a function definition between re-renders.
- Lưu giữ giá trị function mỗi lần re-render.
- dependencies thì giống với useEffect
+ không có dependencies thì nó sẽ tạo mới mỗi khi re-render
+ dependencies là mảng rỗng thì chỉ tạo mới 1 lần duy nhất
+ dependencies là mảng có giá trị thì nó sẽ tạo mỗi khi một trong những giá trị của mảng đó thay đổi.

*Note*: không cần thiết phải dùng.

# useMemo
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
- Lưu giữ lại giá trị của biến mỗi khi re-render.
- dependencies giống với useCallback, và useEffect.
+ không có dependencies thì nó sẽ tạo mới mỗi khi re-render
+ dependencies là mảng rỗng thì chỉ tạo mới 1 lần duy nhất
+ dependencies là mảng có giá trị thì nó sẽ tạo mỗi khi một trong những giá trị của mảng đó thay đổi.

*Note*: không cần thiết phải dùng.

# Function
* pure function:
* - đầu vào giống nhau
* - đầu phải giống nhau
* impure function:
* - đầu vào giống nhau
* - đầu phải khác nhau

- Khi code function trong javascript thì phải luôn luôn code pure function
- Tuân thủ pure function 
+ Không sử dụng biến global
+ Không sử dụng những impure function  khác: Math.random(), Date,...
+ Nên truyền tham số vào function để sử dụng

# local state
- Mỗi component chúng ta sử dụng sẽ có state riêng, không liên quan gì với nhau. (local state)

# global state
- Mọi component nó sẽ có dữ liệu giống nhau.

# Truyền component lồng qua các cấp

# Prop Drilling
- Props không cần cho component nhưng vẫn truyền vào để nó đưa sang cho component khác.
- Làm cho component của chúng ta khó hiểu ??? Không props đó dùng để làm gì?

# useContext -> 
# Redux -> 