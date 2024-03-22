import { useSelector } from "react-redux";
import { Goods } from "./component";
import { selectProductIds } from "../../redux/entities/product";

export const GoodsContainer = () => {
    const productIds = useSelector(selectProductIds);
    
    return (
        <Goods productIds={productIds} />
    )
}