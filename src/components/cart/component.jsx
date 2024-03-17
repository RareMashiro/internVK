/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { CartItem } from "../cartItem/component"
import { selectProductAmount } from "../../redux/ui/cart";
import { useContext } from "react";
import { ProductSumContext } from "../../../contexts/productSum";
import styles from './styles.module.scss';

export const Cart = ({productIds}) => {
    console.log(productIds);
    const amount = useSelector(selectProductAmount);
    const { sum } = useContext(ProductSumContext);

    return (
        <div className={styles.content}>
            {
                productIds?.length ?
                <div>
                    <ul className={styles.cartItems}>
                        {
                            productIds.map(
                                productId => {
                                    return <CartItem productId={productId}/>
                                }
                            )
                        }
                    </ul>
                    <div>Количество: {amount}</div>
                    <div>Сумма: {sum}</div>
                </div>
                : <div className={styles.placeholder}>Выберите товары к покупке</div>
            }
        </div> 
    )
}