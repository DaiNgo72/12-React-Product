import { createSlice } from '@reduxjs/toolkit'

const colorSlice = createSlice({

    name: 'colorSlice',

    initialState: {
        current: 'green'
    },

    reducers: {
        // action chính là tham số mình truyền lên khi gọi method này
        // action.payload: là giá trị người dùng truyền lên

        changeColor(state, action) {
            console.log(action);

            state.current = action.payload;
        }
    }
});


export const colorReducer = colorSlice.reducer;
export const changeColor = colorSlice.actions.changeColor;