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
            <h2>Count: {count}</h2>
        </div>
    );
};

export default Loop;
