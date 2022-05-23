import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import ShopNavigation from "./ShopNavigation";
import OrdersScreen from "../screens/shop/OrdersScreen";
import AdimnNavigation from "./AdminNavigation";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "whitesmoke",
          },
          drawerLabelStyle: {
            fontFamily: "Inter_700Bold",
            fontSize: 18,
          },
          drawerActiveTintColor: Colors.primary,
        }}
      >
        <Drawer.Screen
          name="Products"
          component={ShopNavigation}
          options={{
            headerShown: false,
            drawerLabel: "Products",
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTitleStyle: {
              color: "white",
            },
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={Colors.primary}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Admin"
          component={AdimnNavigation}
          options={{
            headerShown: false,
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-create" : "ios-create"}
                size={23}
                color={Colors.primary}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
