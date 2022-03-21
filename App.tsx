import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import DongnaeScreen from "./screens/Dongnae";
import NearScreen from "./screens/Near";
import ChattingScreen from "./screens/Chatting";
import MyScreen from "./screens/My";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="동네생활" component={DongnaeScreen} />
        <Tab.Screen name="내 근처" component={NearScreen} />
        <Tab.Screen name="채팅" component={ChattingScreen} />
        <Tab.Screen name="나의 당근" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
