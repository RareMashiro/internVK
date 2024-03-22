/* eslint-disable react/prop-types */
import { selectProductById } from '../../redux/entities/product';
import { useSelector } from "react-redux";
import { Product } from './component';

export const ProductContainer = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));
    
    if(!product) {
        return <>Loading...</>
    }
    
    return (
        <Product product={product}/>
    )
}