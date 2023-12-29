import React, { useState } from 'react'
export const Cardcontext=React.createContext();

function CardContext({children}) {
    let data=[{
        price:"$240.00",

    }]
  return <CardContext.Provider value={{data}}>
  {children}
</CardContext.Provider>
}

export default CardContext