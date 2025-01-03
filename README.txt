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