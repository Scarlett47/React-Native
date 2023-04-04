import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./source/screen/Home";
import DetailScreen from "./source/screen/Detail";
import aone from "./source/screen/a1";
import atwo from "./source/screen/a2";
import athree from "./source/screen/a3";
import a4 from "./source/screen/a4";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import { urlUtils , sendRequest } from "../settings/settings";

const HomeStack = createNativeStackNavigator();
const NextStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  function HomeTab() {
    return (
      <HomeStack.Navigator screenOptions={{  }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Detail" component={DetailScreen} />
      </HomeStack.Navigator>
    );
  }
  function NextTab() {
    return (
      <NextStack.Navigator screenOptions={{  }}>
        <NextStack.Screen name="aone" component={aone} />
        <NextStack.Screen name="atwo" component={atwo} />
        <NextStack.Screen name="athree" component={athree} />
      </NextStack.Navigator>
    );
  }
    return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          headerShown: false,
        }}

      >
        <Tab.Screen
          name="Feed"
          component={HomeTab}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NextTab}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
          </NavigationContainer>
    );
  }