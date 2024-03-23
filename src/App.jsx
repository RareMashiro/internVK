import { ProductSumContext } from "../contexts/productSum";
import { LayoutContainer } from "./components/layout/container";
import { Provider } from "react-redux";
import { useState } from "react";
import { store } from "./redux";

export const App = () => {
    const [sum, setSum] = useState(0);
    
    return(
        <Provider store={store}>
            <ProductSumContext.Provider value={{sum, setSum}}> 
                <LayoutContainer />
            </ProductSumContext.Provider>
        </Provider>
    )
}