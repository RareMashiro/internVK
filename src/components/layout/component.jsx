import { Cart } from "../cart/component";
import { Goods } from "../goods/component";
import styles from "./styles.module.scss";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Goods className={styles.goods} />
            <Cart className={styles.cart} />
        </div>
    )
}