/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { products } from '../../../materials/mock';
import { ProductContainer } from '../product/container';
import styles from './styles.module.scss';

export const Goods = ({ productIds }) => {
    return (
        <ul className={styles.main}>
            {productIds.map((id) => {
                return <ProductContainer productId={id}/>
            })}
        </ul>
    )
}