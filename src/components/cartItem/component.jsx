/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteAll } from "../../redux/ui/cart"
import { Counter } from "../counter/component";
import { Button } from "../button/component"
import styles from './styles.module.scss';
import { useContext } from "react";
import { ProductSumContext } from "../../../contexts/productSum";


export const CartItem = ({ product, productId, currAmount }) => {
    const dispatch = useDispatch();
    const { sum, setSum } = useContext(ProductSumContext);

    return (
        <li>
            <div className={styles.items}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.control}>
                    <Counter product={product}/>
                    <Button onClick={() => 
                        {
                            dispatch(deleteAll(productId));
                            setSum(sum - product.price * currAmount);
                        }
                    }>
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