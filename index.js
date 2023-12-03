/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './screens/Home';
import * as React from 'react';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './screens/Details';
const client = new QueryClient();
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer> 
    <GestureHandlerRootView style={{ flex: 1 }}>
    
   
    
    <QueryClientProvider client= {client}>

    
    <PaperProvider>
     

    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Weather App',
          headerStyle: {
            backgroundColor: '#00aaff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen}  options={{
          title: 'Weather Information',
          headerStyle: {
            backgroundColor: '#00aaff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </PaperProvider>
    </QueryClientProvider>
    </GestureHandlerRootView>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
