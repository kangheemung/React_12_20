import './h1.css';
import { useState }from "react";

function Button(){
    const[count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };
    const setToZero = () => {
        setCount(0);
    };

    return(
        <div className="App">
            <button onClick={increase}>이것은 버튼입니다.</button>
            <button onClick={decrease}>버튼 -1</button>
            <button onClick={setToZero}>버튼 리셋 </button>

            {count}
        </div>
    )

}
export default Button;