import { createContext, useContext, useEffect, useState } from "react";
import { RestaurantRequest } from "./restaurant.service";
import { LocationContext } from "../../services/locations/location.context";

export const RestaurantsContext = createContext();

export const RestaurantProvider=  (props)=>{
const {children}= props;
const [restaurants,setRestaurants] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);
const {location} = useContext(LocationContext)

useEffect(()=>{
getRestaurants();
},[])

useEffect(()=>{
    if(location){
const locationString =`${location?.lat},${location?.lng}` 
getRestaurants(locationString);
    }
},[location])

const getRestaurants = (location)=>{

    setIsLoading(true);
    setTimeout(()=>{
RestaurantRequest(location).then((result)=>{
    // console.log(result,"result");
    setRestaurants(result);
    setIsLoading(false);
}).catch((error)=>{
setError(error);
setIsLoading(false);
console.log(error)
});
    },2000);
}

return(
    <RestaurantsContext.Provider  value={{
        restaurants,
        isLoading,
        error
    }}>
        {children}

    </RestaurantsContext.Provider>
)
}