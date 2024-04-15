import camelize from "camelize";
import { locations } from "./location.mock";
export const locationRequest = (search="san_francisco")=>{
return new Promise((resolve,reject)=>{
const locationData=locations[search];
if(!locationData){
    reject("not found")
}

const transformLocation = locationTransform(locationData)
resolve(transformLocation)
})
}

const locationTransform = (data)=>{
const {results} = data;
const formattedResponse = camelize(results);
const {geometry} = formattedResponse[0];
return {lat : geometry.location.lat,lng:geometry.location.lng}
}