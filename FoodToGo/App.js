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
export default function App() {
  let  [oswaldFont] = useOswald({
    Oswald_400Regular
  });
  let [latoFont] = useLato({
    Lato_400Regular
  })
  // if(!oswaldFont || !latoFont){
  //   return null;
  // }
  const Title = styled(Text)`
    font-size: 100px;
    fontFamily: Oswald_400Regular;
     color: ${(props) => props.theme.colors.bg.primary}; 
    `;

const CustomSafeAreaView= styled(SafeAreaView)`

flex:1;
margin-top: ${StatusBar.currentHeight}px;
`
   
  return (   
    
    <ThemeProvider theme={theme}>
       <LocationContextProvider>
          <RestaurantProvider>
             <CustomSafeAreaView>
                <View>
                  {/* <Title>Hello World</Title> */}
                  <RestaurantScreen/>
                 </View>
             </CustomSafeAreaView>
          </RestaurantProvider>
       </LocationContextProvider>
     </ThemeProvider>
  );
}
