import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

function Counter() {

    const dispatch = useDispatch();
    const toggleCounterHandler = () => {
      dispatch({type: 'toggleCounter'})
    };
    const incrementHandler = () => {
      dispatch({type: 'Increment'})
    };
    const decrementHandler = () => {
      dispatch({type: 'Decrement'})
    };
    const showCounter = useSelector((state) => state.showCounter);
    const counter = useSelector((state) => state.counter);

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <>
              <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div></>}

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}

export default Counter;
