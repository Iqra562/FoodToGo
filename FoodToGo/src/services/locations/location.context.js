import React, {useState,createContext, useEffect} from "react";
import { locationRequest } from "./location.service";

export const LocationContext = createContext();

function LocationContextProvider(props){
const {children} = props;
const [keyword,setKeyword] = useState("san francisco");
const [location, setLocation]= useState({lat:null,lng:null});
const [isLoading,setIsLoading]= useState(false);
const [error,setError] = useState(null);

const onSearchHandler = (searchKeyword)=>{
    if(searchKeyword){
        setIsLoading(true);
        
        
        setTimeout(()=>{
            
            if(searchKeyword){
                
                setKeyword(searchKeyword)
            }
        },2000)
    }
};

useEffect(()=>{
    if(!keyword.length){
return;
    }

locationRequest(keyword)
.then((result)=>{
setIsLoading(false);
setError(null);
setLocation(result);

})
.catch((error)=>{
setIsLoading(false);
setError(error)
});
},[keyword])
return(
    <LocationContext.Provider value={{keyword,location,isLoading,error,search:onSearchHandler}}>{children}</LocationContext.Provider>
)}
export default LocationContextProvider;