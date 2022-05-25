import { useState, useEffect } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('effect');
        console.log(value);
        return () => {
            console.log('cleanup');
            console.log(value);
        };
    })

    return (
        <div>
            <p>
                현재 카운터의 값은 <b>{value}</b>이다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
}

export default Counter;