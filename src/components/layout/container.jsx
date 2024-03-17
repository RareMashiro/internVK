import { useEffect, useState } from "react"
import { Layout } from "./component"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux/entities/product/thunks/get-products";
import { selectIsLoading } from "../../redux/ui/request";

export const LayoutContainer = () => {
    const [requestId, setRequestId] = useState(null);
    const isLoading = useSelector((state) => selectIsLoading(state, requestId));
    
    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getProducts()));
    }, [dispatch])
    
    if(isLoading) {
        return <>Loading...</>
    }

    return <Layout />
}