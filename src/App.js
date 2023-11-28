import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState, useRef, useReducer } from "react";

import "./App.css";
//
const mokTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "세수하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    isDone: true,
    content: "저녁먹기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.data ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data);
    }
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mokTodo);
  const idRef = useRef(4);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    dispatch({
      type: "CREATE",
      data: newTodo,
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
    // setTodo(
    //   todo.map((todo)=>{
    //     if(todo.id===targetId){
    //       return {
    //         ...todo, isDone:!todo.isDone
    //       }
    //     }else{
    //       return todo;
    //     }
    //   })
    // )
  };

  const onDelete = (targetId) => {

    dispatch({
      type:"DELETE",
      data : targetId,
    })
    // setTodo(
    //   todo.filter((todo)=>todo.id !==targetId
    // ))
  };

  return (
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
    </div>
  );
}

export default App;
