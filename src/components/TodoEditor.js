import "./TodoEditor.css";
import { useRef, useState } from "react";
const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }

    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className="TodoEditor">
      <h2>새로운 Todo 작성하기 ✎ </h2>
      <div className="editor-wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
          onKeyDown={onKeyDown}
        ></input>
        <button onClick={onClick}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
