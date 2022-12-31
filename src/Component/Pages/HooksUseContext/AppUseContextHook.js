import React from 'react'
import ComponentC from './ComponentC';


export const UserContext =React.createContext();
export const PlayContext =React.createContext();

export default function AppUseContextHook() {
  return (
    <div>
        <UserContext.Provider value={'Sunil'}>
        <PlayContext.Provider value={"Cricket"}>
            
             <ComponentC/> 

        </PlayContext.Provider>
        </UserContext.Provider>
    
    </div>
  )
}
