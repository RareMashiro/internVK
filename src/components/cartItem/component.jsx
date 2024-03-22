/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteAll } from "../../redux/ui/cart"
import { Counter } from "../counter/component";
import { Button } from "../button/component"
import styles from './styles.module.scss';


export const CartItem = ({ product, productId }) => {
    const dispatch = useDispatch();
    
    return (
        <li>
            <div className={styles.items}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.control}>
                    <Counter product={product}/>
                    <Button onClick={() => dispatch(deleteAll(productId))}>
                            <img className={styles.bucket} 
                                src='https://img1.pngindir.com/20180520/owg/kisspng-rubbish-bins-waste-paper-baskets-recycling-bin-c-5b01bb379fbdc4.9342500115268401196543.jpg'
                            >
                            </img>
                    </Button>
                </div>
            </div>
        </li>
    )
}