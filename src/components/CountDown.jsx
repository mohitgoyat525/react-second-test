import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [countdown, setCountDown] = useState(1);

    useEffect(() => {
        const incrementCount = () => {
            setCountDown(prevCount => {
                if (prevCount < 100) {
                    setTimeout(incrementCount, 1000);
                    return prevCount + 1;
                }
                return prevCount;
            });
        };

        setTimeout(incrementCount, 1000);

    }, []);

    return (
        <div>
            <h1>Count: {countdown}</h1>
        </div>
    );
};

export default CountDown;
