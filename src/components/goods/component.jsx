// import { products } from '../../../materials/mock';
import { useSelector } from 'react-redux';
import { Product } from '../product/component';
import { selectProductIds } from '../../redux/entities/product';
import styles from './styles.module.scss';

export const Goods = () => {
    const productIds = useSelector(selectProductIds);
    
    return (
        <ul className={styles.main}>
            {productIds.map((id) => {
                return <Product productId={id} />
            })}
        </ul>
    )
}