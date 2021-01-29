import React ,{useLocalObservable} from "react";
import {createDataStore} from "./dataStore";
const DataContext =React.createContext(null);

export const DataProvider=({children})=>{
   // const dataStore=useLocalStore(createDataStore);
   const dataStore=useLocalObservable(()=>({ data:[],
                     changeData(val)
                       {
                          this.data.push({val});
                      }}));
    return  <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
}
export const useDataStore=()=>React.useContext(DataContext);