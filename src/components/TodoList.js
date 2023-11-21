import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo,onUpdate,onDelete}) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterSearch = () => {
    if (search === "") {
      return todo;
    } // search 가 빈문자일 때는 아무것도 띄우지마라
    return todo.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  }; // 콜백함수는 함수 안에 요소가 참이면 그 값을 반환하고 거짓이면 반환을 하지 않는 것
  return (
    <div className="TodoList">
      <h2>Todo List 🌱</h2>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
        
      ></input>
      <div className="list_wrapper">
        {filterSearch().map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
