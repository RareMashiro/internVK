import { selectProductById } from '../../redux/entities/product';
import { Counter } from '../counter/component';
import styles from './styles.module.scss';
import { useSelector } from "react-redux";

export const Product = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));
    
    if(!product) {
        return <>Loading...</>
    }

    return (
        <li>
            <div className={styles.section}>
                <div><img className={styles.logo} src={product.thumbnail}/></div>
                <div className={styles.description}>
                    <span className={styles.text}>{product.title}</span>
                    <div className={styles.switch}>
                        <span>Цена: {product.price}</span>
                        <Counter product={product}/>
                    </div>
                </div>
            </div>
        </li>
    )
}