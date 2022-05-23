import React from "react";
import Colors from "../constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";
import EditProductScreen from "../screens/user/EditProductScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
const Stack = createStackNavigator();

const AdimnNavigation = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="AdminScreen"
        component={UserProductsScreen}
        options={{ title: "Admin" }}
      />
      <Stack.Screen name="EditScreen" component={EditProductScreen} />
    </Stack.Navigator>
    // c
  );
};

export default AdimnNavigation;
