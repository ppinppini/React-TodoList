import "./TodoItem.css";

const TodoItem = ({ id, isDone, createdDate, content, onUpdate,onDelete}) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton =()=>{
    onDelete(id)
  } 
  return (
    <div className="TodoItem">
      <div className="checkbox_bol">
        <input
          onChange={onChangeCheckbox}
          type="checkbox"
          checked={isDone}
        ></input>
      </div>
      <div className="title_col">{content}</div>
      <div className="data_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
