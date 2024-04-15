import React, { useContext }  from "react";

import UserSearch from '../components/UserSearch.components'
import CustomRestaurantCard from "../components/RestaurantCard/CustomRestaurantCard";
import { ScrollView, View,FlatList,ActivityIndicator,Text } from "react-native";
import {styled} from "styled-components";
import { RestaurantsContext } from "../../services/restaurants/restaurant.context";
import { LocationContext } from "../../services/locations/location.context";

const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  
`;

const RestaurantList  = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;


const Loading = styled(ActivityIndicator)``;

function RestaurantScreen (){
  const totalRestaurant = Array.from({length:5})
   const {isLoading,restaurants} = useContext(RestaurantsContext);
   const {isLoading: LocationLoader,location,error} = useContext(LocationContext)
   const Loaders = isLoading || LocationLoader;
  //  restaurants.forEach(single => console.log(single?.address ,"correct"));
  //  console.log(location,"ressdfhdfdjkhfkjdhkj")
  console.log(error)
  return<>
    <UserSearch/>
   
 {Loaders && (<Loading/>)}

    
   {!Loaders   && 
   (
   <RestaurantListContainer>
    {/* <ScrollView>
    {
      totalRestaurant.map((singleArray)=>{
      return  <CustomRestaurantCard restaurant={{}}/>
      })
    }
  </ScrollView> */}

  <RestaurantList
  data={restaurants}
  renderItem={ 
    (singleRestaurant)=>(
      // console.log(singleRestaurant.item,"items"),
      <CustomRestaurantCard  restaurant={singleRestaurant?.item}/>
    )
  }
  keyExtractor={(singleRestaurant) => singleRestaurant?.item?.name}

  />
  </RestaurantListContainer>
  
)}
</>
}
export default RestaurantScreen;