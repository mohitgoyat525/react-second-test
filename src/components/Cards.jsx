import React from 'react';
import { CARDS_LIST } from '../utils/helper';
import { useSearchParams } from 'react-router';


const Cards = () => {
    const [, setParams] =useSearchParams() ;

    const handleClick = (name) => {
        setParams({ name: name.toLowerCase() });
    };

    return (
        <div className='d-flex align-items-center  justify-content-center h-screen '>
            <div className='d-flex align-items-center gap-4 lg-flex-wrap'>
            {CARDS_LIST.map((obj, i) => (
                <div key={i} className='card px-4'>
                    <img src={obj.img} alt={obj.name} className='cards-img' />
                    <h2
                        onClick={() => handleClick(obj.name)}
                        className='text-center py-4'
                    >
                        {obj.name}
                    </h2>
                </div>
            ))}
                </div>
        </div>
    );
};

export default Cards;
