/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { CartItem } from "./component"
import { selectProductById } from "../../redux/entities/product";
import { selectProductAmountById } from "../../redux/ui/cart";

export const CartItemContainer = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));
    const currAmount = useSelector(state => selectProductAmountById(state, productId));
    
    if(!product) {
        return <>Loading...</>
    }

    return (
        <CartItem product={product} productId={productId} currAmount={currAmount}/>
    )
}