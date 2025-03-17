import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from 'react-icons/fa';
import { deleteTodo } from "../Redux/todoSlice";

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo);

  return (
    <>
      <li>
        <input type="checkbox" checked={isCompleted} />
        <p>
          {isFavorite && <FaStar color="gold"/>}
          {todo}
        </p>
      
      
      <div>
            <button> {isFavorite ? "Dislike" : "Like"} </button>
            <button >Edit</button>
            <button onClick={()=>dispatch(deleteTodo(id))} >Delete</button>
          </div>
      </li>


    </>
  );
};

export default Item;
