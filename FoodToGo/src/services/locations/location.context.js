import React, {useState,createContext} from "react";

export const LocationContext = createContext();

function LocationContextProvider(props){
const {children} = props;
const [keyword,setKeyword] = useState("san francisco");
const [location, setLocation]= useState(null);
const [isLoading,setIsLoading]= useState(false);
const [error,setError] = useState(null);


return(
    <LocationContext.Provider value={{keyword,location,isLoading,error}}>{children}</LocationContext.Provider>
)
}
export default LocationContextProvider