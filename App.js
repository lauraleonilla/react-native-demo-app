import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import MapScreen from "./screens/MapScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import EditUserInfo from "./screens/EditUserInfo";
import { store } from "./store";
import RegisterScreen from "./screens/RegisterScreen";
import YourOrders from "./screens/YourOrders";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditUserInfo"
            component={EditUserInfo}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="YourOrders" component={YourOrders} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
