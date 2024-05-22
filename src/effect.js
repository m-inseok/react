import {useEffect, useState} from "react";

function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    return(
        <p>TodoList 타이머가 작동중입니다. : {count}</p>
    )
}
export default Timer;