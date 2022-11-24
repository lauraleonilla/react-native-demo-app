import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import MapScreen from "./screens/MapScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import EditUserInfo from "./screens/EditUserInfo";
import { store, persistor } from "./store";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
