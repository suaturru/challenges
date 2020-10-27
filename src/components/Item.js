import React from 'react';

const Item = ({image, date, price, name}) => {
    return (
        <div>
            <img src={image} alt=""/>
            <div>
                {date}
            </div>
            <div>
                {price}
            </div>
            <div>
                {name}
            </div>
        </div>
    );
};

export default Item;
