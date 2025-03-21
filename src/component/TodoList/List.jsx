import { useSelector } from "react-redux";
import Item from "./Item";

const List = () => {
  const todos = useSelector((state) => state.todos.items);
  const filter = useSelector((state) => state.filter.filter)
 


  const filterData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()))
 
  return (
    <>
      <ul>
        {filterData.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </ul>
    </>
  );
};

export default List;
