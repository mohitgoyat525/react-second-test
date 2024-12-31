import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
        setCount(count + 1);
    }
    const decrementHandler = () => {
        setCount(count - 1);
    }
    return (
        <div className='d-flex align-items-center justify-content-center flex-column my-5'>
            <h2 className='text-center fw-bold'>useState Counter</h2>
            <div className='flex-column'>
            <h2 className='text-black text-center fs-1 fw-medium'>Count: {count}</h2>
            <button className='py-3 px-5 bg-danger text-white fw-normal' onClick={incrementHandler}>Increment</button>
                <button className='py-3 px-5 bg-danger text-white fw-normal' onClick={decrementHandler}>Decrement</button>
                </div>
        </div>
    )
}

export default Counter