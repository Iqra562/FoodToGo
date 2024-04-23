import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import  styled  from 'styled-components/native';
 import { useFonts as useLato , Lato_400Regular } from '@expo-google-fonts/lato';
 import { useFonts as useOswald ,Oswald_400Regular } from '@expo-google-fonts/oswald';
 import RestaurantScreen from './src/features/screens/Restaurant.screen'
 import theme from './src/infrastructure/theme/index';
import { RestaurantProvider } from './src/services/restaurants/restaurant.context';
import  LocationContextProvider  from './src/services/locations/location.context'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = (parameter) => {
  const { route } = parameter;
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: (tabBarParam) => {
      const { size, color } = tabBarParam;
      return <Ionicons name={iconName} size={size} color={color} />;
    },

    headerShown: false,
  };
};


export default function App() {
  // let  [oswaldFont] = useOswald({
  //   Oswald_400Regular
  // });
  // let [latoFont] = useLato({
  //   Lato_400Regular
  // })

  const Title = styled(Text)`
    font-size: 100px;
    fontFamily: Oswald_400Regular;
     color: ${(props) => props.theme.colors.bg.primary}; 
    `;

const CustomSafeAreaView= styled(SafeAreaView)`

flex:1;
margin-top: ${StatusBar.currentHeight}px;
`

function SettingsScreen(){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Setting</Text>
    </View>
  )
}
function MapsScreen(){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Map</Text>
    </View>
  )
}

   
  return (   
    
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
  <RestaurantProvider>
     <CustomSafeAreaView>
        {/* <View> */}
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    > 
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
      <Tab.Screen name="Map" component={MapsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    {/* {AllRestaurantPart} */}
      </NavigationContainer>
      {/* </View> */}
     </CustomSafeAreaView>
  </RestaurantProvider>
</LocationContextProvider>
     </ThemeProvider>
  );
}
