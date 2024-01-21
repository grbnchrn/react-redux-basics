import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

function Counter() {

    const dispatch = useDispatch();
    
    const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter())
    };
    const incrementHandler = () => {
      dispatch(counterActions.increment())
    };
    const decrementHandler = () => {
      dispatch(counterActions.decrement())
    };
   /*  const incrementByValueHandler = () => {
      dispatch(counterActions.incrementByValue(10))
    }; */

    const showCounter = useSelector((state) => state.counterRdr.showCounter);
    const counter = useSelector((state) => state.counterRdr.counter);

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
