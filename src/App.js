import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

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
function App() {
  
  const [todo, setTodo] = useState(mokTodo);
  const idRef= useRef(4)

  const onCreate =(content)=> {
    const newTodo={
        id:idRef.current++,
        isDone:false,
        content,
        createdDate:new Date().getTime()
      }
    setTodo([...todo, newTodo])
  }
  
  const onUpdate = (targetId) =>{
    setTodo(
      todo.map((todo)=>{
        if(todo.id===targetId){
          return {
            ...todo, isDone:!todo.isDone
          }
        }else{
          return todo;
        }
      })
    )
  }
  
  const onDelete = (targetId) =>{
    setTodo(
      todo.filter((todo)=>todo.id !==targetId
    ))
  
    }
  
    
  ;

  return (
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
    </div>
  );
}

export default App;
