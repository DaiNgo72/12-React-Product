import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    // duy nhất
    name: 'counterSlice',

    // initialState: giá trị khởi tạo, bất kỳ kiểu dữ liệu gì cũng được.
    initialState: {
        value: 100
    },

    reducers: {
        // Mọi method trong reducers khi được gọi đều nhận tham số đầu tiên là state
        tangValue(state) {
            state.value += 1;

            //⚠️: không được dùng return
        }

    }
});

// export reducer để gắn vào store của redux
export const reducer = counterSlice.reducer;
// reducer = {value: 100}

export const tangValue = counterSlice.actions.tangValue;