import { createContext, useEffect, useState } from "react";
import { RestaurantRequest } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantProvider=  (props)=>{
const {children}= props;
const [restaurants,setRestaurants] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);

useEffect(()=>{
getRestaurants();
},[])

const getRestaurants = ()=>{
    setIsLoading(true);
    setTimeout(()=>{
RestaurantRequest().then((result)=>{
    console.log(result,"result");
    setRestaurants(result);
    setIsLoading(false);
}).catch((error)=>{
setError(error);
setIsLoading(false);
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