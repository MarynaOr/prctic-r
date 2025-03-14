import { useDispatch, useSelector } from "react-redux";
import { dekrement, inkrement, reset, changeStep } from "../Redux/counterSlice";

export const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(inkrement());
  };
  const handleMinus = () => {
    dispatch(dekrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleChange = (e) => {
    dispatch(changeStep(+e.target.value));
  };

  return <div>
    <div>
        <h1> {counter} </h1>
        <input value={step}  onChange={handleChange}/>
        <div>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePlus}>Plus</button>

        </div>


    </div>
  </div>;
};
