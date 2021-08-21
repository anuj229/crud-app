import React ,{useContext, useState} from 'react'

const AppContext  = React.createContext();

const AppProvider=({children})=>{

    const [users, setUsers] = useState([
      {
        id: 1,
        name: "Anuj Singh",
        position: "web developer",
        salary: "50,000$",
      },
      {
        id: 2,
        name: "Mithun ",
        position: "Software Developer",
        salary: "50,000$",
      },
      {
        id: 3,
        name: "Ravi Singh",
        position: "Data Scientist",
        salary: "60,000$",
      },
    ]);

  return (
      <AppContext.Provider value={{users,setUsers}} >
          {children}
      </AppContext.Provider>
  );
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext};