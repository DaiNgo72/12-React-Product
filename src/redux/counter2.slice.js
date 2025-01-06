import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    // duy nhất
    name: 'counterSlice',

    // initialState: giá trị khởi tạo, bất kỳ kiểu dữ liệu gì cũng được.
    initialState: {
        value: 200
    },

    reducers: {}
});

// export reducer để gắn vào store của redux
export const reducer = counterSlice.reducer;
// reducer = {value: 100}