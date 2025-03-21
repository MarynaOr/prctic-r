import { useDispatch } from "react-redux";
import { setFilter } from "../Redux/filterSlice";

const SearchBar = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <input onChange={e => dispatch(setFilter(e.target.value))} type="text" placeholder="Search" />
      </div>
    </>
  );
};

export default SearchBar;