import React, { createContext, useState } from 'react'

const RoleContext = createContext()

const RoleContextProvider = (props) => {
    const [userRole, setUserRole] = useState('user')

    return (
        <RoleContext.Provider
            value={{
                userRole
            }}>
            {props.children}
        </RoleContext.Provider>
    )
}
export default RoleContextProvider