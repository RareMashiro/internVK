import { Provider } from "react-redux";
import { store } from "./redux";
import { LayoutContainer } from "./components/layout/container";
import { ProductSumContext } from "../contexts/productSum";
import { useState } from "react";

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