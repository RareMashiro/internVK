/* eslint-disable react/prop-types */
import { selectProductAmountById } from "../../redux/ui/cart";
import { selectProductById } from "../../redux/entities/product";
import { useSelector } from "react-redux";
import { CartItem } from "./component"

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