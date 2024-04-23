import { createStackNavigator } from "@react-navigation/stack"
import RestaurantScreen from "../features/screens/Restaurant.screen";
import RestaurantDetailScreen from "../features/screens/RestaurantDetail.screen";

const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = ()=>{
    return(
<RestaurantStack.Navigator>
    <RestaurantStack.Screen 
    name="RestaurantListing"
    component={RestaurantScreen}
    />
    <RestaurantStack.Screen 
    name="RestaurantListing"
    component={RestaurantDetailScreen}
    />
</RestaurantStack.Navigator>

    )
}