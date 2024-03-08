import {mocks} from "./mock/index";
import camelize from "camelize";
export const RestaurantRequest = (location = "37.7749295,-122.4194155") =>{
return new Promise((resolve,reject)=>{
   const mock = mocks[location];
   if(!mock){
reject("no data found ");
   }
   const tempResponse =  restaurantTransform(mock?.results);
   resolve(tempResponse);
}
)
}
export const restaurantTransform = (data)=>{
   const results =camelize(data?.results);
   const mappdataresults = results?.map((singleRestaurant)=>{
      return{
         ...singleRestaurant,
   address : singleRestaurant?.vicinity,
   isOpenNow  :Boolean(singleRestaurant?.opening_hours?.open_now),
   isClosedTemporarily  : singleRestaurant?.business_status === "CLOSED_TEMPORARILY",

}
})
return mappdataresults;
// console.log(mappdataresults.address,"data")
}