import { useState } from "react";
import { useDispatch } from "react-redux";

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo);

  return (
    <>
      <li>
        <input type="checkbox" checked={isCompleted} />
        <p>
          {editMode ? (
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
            <p onClick={() => setEditMode(true)}>
              {isFavorite && <FaStar color="gold" />} {todo}{" "}
            </p>
          )}
          <div>
            <button> {isFavorite ? "Dislike" : "Like"} </button>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={() => dispatch(id)}>Delete</button>
          </div>
        </p>
      </li>
    </>
  );
};

export default Item;
