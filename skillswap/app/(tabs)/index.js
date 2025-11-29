import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import CommunityScreen from "./CommunityScreen";
import HomeScreen from "./HomeScreen";
import MessagesScreen from "./MessagesScreen";
import ProfileScreen from "./ProfileScreen";
import SwapsScreen from "./SwapsScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1E88E5",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          if (route.name === "Community") iconName = "people-outline";
          if (route.name === "Swaps") iconName = "swap-horizontal-outline";
          if (route.name === "Messages") iconName = "chatbubbles-outline";
          if (route.name === "Profile") iconName = "person-outline";
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Swaps" component={SwapsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
