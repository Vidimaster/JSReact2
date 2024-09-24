import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { fetchTodos } from './redux/services/showListThunk.jsx';
import { ListTodo } from "./components/ToDo/Todo";
import { useState } from "react";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const data = dispatch(fetchTodos(2));
  data.unwrap()
    .then((PromiseResult) => {
      setState(PromiseResult)

    })
    .catch((rejected) => {
      console.log();
    });
  return (

    <div>
      <ListTodo prop={state} />
    </div>

  );
}

export default AppWrapper;
