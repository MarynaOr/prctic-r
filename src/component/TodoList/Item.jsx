import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { deleteTodo, editTodo } from "../Redux/todoSlice";

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo);

  return (
    <>
      <li>
        <input type="checkbox" checked={isCompleted} />
      

        
          { editMode ? (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                dispatch(editTodo({ id, todo: value }));
                setEditMode(false);
              }}
            />
          </div>
          ) : (
            <div onClick={() => setEditMode(true)}>
              {isFavorite && <FaStar color="gold" />} {todo}{" "}
            </div>
          
          )}
        

        <div>
          <button> {isFavorite ? "Dislike" : "Like"} </button>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </div>
      </li>
    </>
  );
};

export default Item;
