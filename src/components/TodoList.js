import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useMemo, useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterSearch = () => {
    if (search === "") {
      return todo;
    } // search 가 빈문자일 때는 아무것도 띄우지마라
    return todo.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  }; // 콜백함수는 함수 안에 요소가 참이면 그 값을 반환하고 거짓이면 반환을 하지 않는 것

  

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
  
    const totalCount = todo.length;
    const doneCount = todo.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  return (
    <div className="TodoList">
      <div>
        <div>전체 투두 : {totalCount}</div>
        <div>완료 투두 : {doneCount}</div>
        <div>미완료 투두: {notDoneCount}</div>
      </div>
      <h2>Todo List 🌱</h2>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="list_wrapper">
        {filterSearch().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
