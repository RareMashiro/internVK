/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { CartItem } from "./component"
import { selectProductById } from "../../redux/entities/product";

export const CartItemContainer = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));
    
    if(!product) {
        return <>Loading...</>
    }

    return (
        <CartItem product={product} productId={productId}/>
    )
}