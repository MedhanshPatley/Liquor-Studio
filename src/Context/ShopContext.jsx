import React,{createContext} from "react";
import data from '../Components/Assets/data'

export const ShopContext = createContext(null)

const ShopContextProvider =(props)=>{
    const contextValue ={data};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.childer}
        
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;