/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectProductAmountById } from "../../redux/ui/cart"
import { Button } from "../button/component";
import { useContext } from "react";
import { ProductSumContext } from "../../../contexts/productSum";
import styles from './styles.module.scss';

export const Counter = ({ product, min = 1, max = 10 }) => {
    const amount = useSelector(state =>
        selectProductAmountById(state, product.id)
    );
    
    const {sum, setSum} = useContext(ProductSumContext);

    const dispatch = useDispatch();

    return (
        <div className={styles.controlSection}>
            <span>Количество: </span>
            <div className={styles.counter}>
                <Button onClick={() => 
                    {
                        dispatch(decrement(product.id))
                        setSum(sum - product.price)
                    }
                } disabled={amount <= min}>
                    -
                </Button>
                <div>{amount}</div>
                <Button onClick={() => 
                    {
                        dispatch(increment(product.id))
                        setSum(sum + product.price)
                    }
                } disabled={amount === max}>
                    +
                </Button>
            </div>
        </div>
    )
}