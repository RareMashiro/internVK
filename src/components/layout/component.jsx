import { CartContainer } from "../cart/container";
import { Goods } from "../goods/component";
import styles from "./styles.module.scss";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.goods}>
                <Goods />
            </div>
            <div className={styles.cart}>
                <CartContainer />
            </div>
        </div>
    )
}