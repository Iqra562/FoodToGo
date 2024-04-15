import {mockImages, mocks} from "./mock/index";
import camelize from "camelize";
export const RestaurantRequest = (location = "37.7749295,-122.4194155") =>{
return new Promise((resolve,reject)=>{
   const mock = mocks[location];
   if(!mock){

reject("no data found ");
   }
   // else{
   //    console.log(mock)
   // }
   const tempResponse =  restaurantTransform(mock?.results);
   resolve(tempResponse);
}
)
}
export const restaurantTransform = (data)=>{
   const results =camelize(data);
   // console.log(mappdataresults.address,"data")
   const mappdataresults = results?.map((singleRestaurant)=>{
      // console.log(singleRestaurant.photos,"photos")
      // singleRestaurant.photos = singleRestaurant.photos.map(()=>{

      //    return mockImages[Math.ceil(Math.random() * (mockImages.length-1))]
      // })
      singleRestaurant.photos =  mockImages[Math.ceil(Math.random() * (mockImages.length-1))]
      
      // console.log(singleRestaurant,"camel")
      return{
         ...singleRestaurant,
   address : singleRestaurant?.vicinity,
   isOpenNow  :Boolean(singleRestaurant?.openingHours?.openNow),
   isClosedTemporarily  : singleRestaurant?.businessStatus === "CLOSED_TEMPORARILY",
   
}
})

return mappdataresults;
}
// import { mocks } from "./mock/index";
// import camelize from "camelize";

// export const RestaurantRequest = (location = "37.7749295,-122.4194155") => {
//     return new Promise((resolve, reject) => {
//         const mock = mocks[location];
//         if (!mock) {
//             reject("No data found");
//         }
//         const tempResponse = restaurantTransform(mock?.results);
//         resolve(tempResponse);
//     });
// };

// export const restaurantTransform = (data) => {
//     const results = camelize(data); // Remove .results here
//     const mappedDataResults = results?.map((singleRestaurant) => {
//         return {
//             ...singleRestaurant,
//             address: singleRestaurant?.vicinity,
//             isOpenNow: Boolean(singleRestaurant?.opening_hours?.open_now),
//             isClosedTemporarily: singleRestaurant?.business_status === "CLOSED_TEMPORARILY",
//         };
//     });

//     // Log each address
//     mappedDataResults.forEach((restaurant) => {
//         console.log(restaurant.address);
//     });

//     return mappedDataResults;
// };
