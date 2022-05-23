import React, { useEffect, useState } from "react";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/shop/CartScreen";
import AuthScreen from "../screens/user/AuthScreen";
import { useSelector } from "react-redux";
import StartupScreen from "../screens/StartupScreen";
const Stack = createStackNavigator();

const ShopNavigation = () => {
  const authState = useSelector((state) => state);

  //console.log(authState);

  //console.log(storageData, "test");
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
      initialRouteName="Startup"
    >
      {authState.auth.token ? (
        <React.Fragment>
          <Stack.Screen name="Startup" component={StartupScreen} />
          <Stack.Screen
            name="All Products"
            component={ProductsOverviewScreen}
          />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{ title: "Cart" }}
          />
        </React.Fragment>
      ) : (
        <Stack.Screen name="Auth" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};

export default ShopNavigation;
