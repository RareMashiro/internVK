import { GoodsContainer } from "../goods/container";
import { CartContainer } from "../cart/container";
import styles from "./styles.module.scss";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.goods}>
                <GoodsContainer />
            </div>
            <div className={styles.cart}>
                <CartContainer />
            </div>
        </div>
    )
}