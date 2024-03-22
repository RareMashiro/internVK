/* eslint-disable react/prop-types */
import { Counter } from '../counter/component';
import styles from './styles.module.scss';

export const Product = ({ product }) => {
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