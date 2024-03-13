import camelize from "camelize";

export const locationRequest = (search="san_francisco"){
return new Promise((resolve,reject)=>{
const locationData=location[search];
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
cosnt {geometry} = formattedResponse[0];
return {lat : geometry.location.lat,lng:geometry.location.lng}
}