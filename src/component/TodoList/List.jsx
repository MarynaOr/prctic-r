import { useSelector } from "react-redux";
import Item from "./Item";

const List = () => {
  const todos = useSelector(state=> state.todos.items)
  return (
    <>
      <ul>
        {todos.map(item =>{
            <Item {...item} key={item.id} />
        })}
      </ul>
    </>
  );
};

export default List;