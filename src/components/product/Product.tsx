import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

type TypeProps = { item: IProductModel }

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>ціна: {item.price} $</p>
            <p> {item.description}</p>


            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;