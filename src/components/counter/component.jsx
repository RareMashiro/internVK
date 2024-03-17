import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectProductAmountById } from "../../redux/ui/cart"
import { Button } from "../button/component";
import { useContext } from "react";
import { ProductSumContext } from "../../../contexts/productSum";

export const Counter = ({ product, min = 1, max = 10 }) => {
    const amount = useSelector(state =>
        selectProductAmountById(state, product.id)
    );
    
    const {sum, setSum} = useContext(ProductSumContext);

    const dispatch = useDispatch();

    return (
        <div>
            <span>Количество: </span>
            <Button onClick={() => 
                {
                    dispatch(decrement(product.id))
                    setSum(sum - product.price)
                }
            } disabled={amount <= min}>
                -
            </Button>
            <span>{amount}</span>
            <Button onClick={() => 
                {
                    dispatch(increment(product.id))
                    setSum(sum + product.price)
                }
            } disabled={amount === max}>
                +
            </Button>
        </div>
    )
}