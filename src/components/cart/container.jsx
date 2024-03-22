import { selectCartProductIds, selectProductAmount } from "../../redux/ui/cart"
import { ProductSumContext } from "../../../contexts/productSum";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { Cart } from "./component";

export const CartContainer = () => {
    const productIds = useSelector(selectCartProductIds);
    const amount = useSelector(selectProductAmount);
    const { sum } = useContext(ProductSumContext);
    
    return (
        <Cart productIds={productIds} amount={amount} sum={sum}/>
    )
}