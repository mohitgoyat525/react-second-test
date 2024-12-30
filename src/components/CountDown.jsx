import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1 === 101 ? 100 : count + 1)
        }, 1000)
    }, [count])

    return (
        <div>
            <h2 className='text-center'>useEffect CountDown</h2>
             <p className='text-black text-center fs-1 fw-bold'>{count}</p>
        </div>
    );
};

export default CountDown;
