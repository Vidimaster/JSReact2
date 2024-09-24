import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { list } from '../../data/tasks'

const initialState = {

}

let result;
function fetchMyData(i) {
    return new Promise((resolve, reject) => {
        result = setTimeout(() => resolve(list.items), i * 1000);
        setTimeout(reject, 5000);
    });
}

const fetchTodos = createAsyncThunk('todos/fetchTodos', async (num) => {
    return await fetchMyData(num);
})

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                clearTimeout(result);
                return "fetching data...";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                return "no data...";
            });
    }
})

export const { showItems } = todosSlice.actions;
export const selectData = state => state.items;
export { fetchTodos };
export default todosSlice.reducer; 