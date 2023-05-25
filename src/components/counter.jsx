import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/store";

export const Counter = () => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.myValue);

    return (
        <div>
            <h2>ПРИМЕР</h2>
            {/* <button onClick={() => dispatch(increment(100))}>increment</button> */}
            {value}
            {/* <button onClick={() => dispatch(decrement(10))}>decrement   </button> */}
        </div>

    )
}