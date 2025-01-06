import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './counter.slice'
import { reducer as counter2Reducer } from './counter2.slice';

import { colorReducer } from './color.slice'

// Nơi chúng ta kết nối tất cả các state ở các slice lại với nhau
export const store = configureStore({
    reducer: {
        counterReducer: reducer,
        counter: counter2Reducer,
        colorReducer,
    }
})

// const _store = {
//     counterReducer: reducer,
//     counter: counter2Reducer,
// }