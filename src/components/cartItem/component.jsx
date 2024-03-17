import { useSelector } from "react-redux";
import { Counter } from "../counter/component";
import { selectProductById } from "../../redux/entities/product";
import { Button } from "../button/component"
import { useDispatch } from "react-redux";
import { deleteAll } from "../../redux/ui/cart"
import styles from './styles.module.scss';


export const CartItem = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));
    const dispatch = useDispatch();

    if(!product) {
        return <>Loading...</>
    }

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