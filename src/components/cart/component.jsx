/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { CartItem } from "../cartItem/component"
import { CartItemContainer } from "../cartItem/container";
import styles from './styles.module.scss';

export const Cart = ({ productIds, amount, sum }) => {    
    return (
        <div className={styles.content}>
            {
                productIds?.length ?
                <div className={styles.cart}>
                    <ul className={styles.cartItems}>
                        {
                            productIds.map(
                                productId => {
                                    return <CartItemContainer productId={productId}/>
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