import React from "react";
import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantDetails from "./screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import OrderCompleted from "./screens/OrderCompleted";
import RideOrdered from "./screens/RideOrdered";


//1. Set up redux 


export default function App() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (

    <ReduxProvider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
          <Stack.Navigator
            initialRouteName="HomeScreen" 
            screenOptions={screenOptions}
          >
            <Stack.Screen 
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen 
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="EatsScreen"
              component={EatsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
                  name="RestaurantDetails" 
                  component={RestaurantDetails} 
                  options={{
                    headerShown: false,
                  }}
                  />
            <Stack.Screen 
                  name="OrderCompleted" 
                  component={OrderCompleted} 
                  options={{
                    headerShown: false,
                  }}
              />
              <Stack.Screen 
                  name="RideOrdered" 
                  component={RideOrdered} 
                  options={{
                    headerShown: false,
                  }}
              />
              </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
