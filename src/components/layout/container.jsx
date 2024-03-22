import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { selectIsLoading } from "../../redux/ui/request";
import { getProducts } from "../../redux/entities/product/thunks/get-products";
import { Layout } from "./component"

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