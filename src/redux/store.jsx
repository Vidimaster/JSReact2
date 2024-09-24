import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./services/showListThunk";

const store = configureStore({
    reducer: {

        todos: todosSlice,
    }
});
export default store;