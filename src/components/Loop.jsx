import React, { useState, useEffect } from 'react';

const Loop = () => {
    const [count, setCount] = useState(9);

    useEffect(() => {
     
        for (let i = 9; i >= 0; i--) {
            setTimeout(() => {
                setCount(i);
            }, (9 - i) * 1000);
        }
    }, []);

    return (
        <div>
            <h2 className='text-center'>For Loop</h2>
            <h2 className='text-black text-center fs-1 fw-bold'>Count: {count}</h2>
        </div>
    );
};

export default Loop;
