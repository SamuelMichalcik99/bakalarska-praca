/************************************************************
*                       CONTEXT PROVIDER                    *
*                                                           *
*   The component is used to create React Contexts, which   *
*   serve similar purposes as global variables. The Context *
*   object contains the current context value and can be    *
*   accessed by any component that is a descendant of the   *
*   Provider. The Context Provider is a component that      *
*   wraps the component tree (in this case it is used as    *
*   wrapper of whole App component) and provides            *
*   the Context object to all the components within         *
*   that tree.                                              *
*                                                           *
************************************************************/


import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({});

export default function ContextProvider({children}) {

  const [comparedComputers, setComparedComputers] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <GlobalContext.Provider value={{ comparedComputers, setComparedComputers, openFilter, setOpenFilter }}>
      {children}
    </GlobalContext.Provider>
  )
}