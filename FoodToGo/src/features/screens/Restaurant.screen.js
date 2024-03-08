import React, { useContext }  from "react";
import UserSearch from '../components/UserSearch.components'
import CustomRestaurantCard from "../components/RestaurantCard/CustomRestaurantCard";
import { ScrollView, View,FlatList,ActivityIndicator } from "react-native";
import {styled} from "styled-components";
import { RestaurantsContext } from "../../services/restaurants/restaurant.context";

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
   console.log(restaurants)
  
  return<>
    <UserSearch/>
 {isLoading && <Loading/>}

    
   {!isLoading && <RestaurantListContainer>
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
      <CustomRestaurantCard  restaurant={singleRestaurant}/>
    )
  }
  // keyExtractor={(singleRestaurant) => singleRestaurant.name}

  keyExtractor={(singleRestaurant,index) => index}
  />
  </RestaurantListContainer>}
</>

}
export default RestaurantScreen;