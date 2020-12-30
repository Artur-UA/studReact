/* import React from 'react'

const MyContext = React.createContext(null);

export const Provider = (props) => {   //инкапсуляция <MyContext.Provider></MyContext.Provider> по факту чтобы меньше места занимало, было менее громоздким. 
    return (
        <MyContext.Provider value={props.store}>
            {props.children}
        </MyContext.Provider>

    )
}
export default MyContext; */