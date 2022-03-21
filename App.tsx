import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import DongnaeScreen from "./screens/Dongnae";
import NearScreen from "./screens/Near";
import ChattingScreen from "./screens/Chatting";
import MyScreen from "./screens/My";
import HomeIconOutline from "./assets/icons/Outline/HomeIconOutline";
import DongnaeIconOutline from "./assets/icons/Outline/DongnaeIconOutline";
import HomeIconSolid from "./assets/icons/Solid/HomeIconSolid";
import DongnaeIconSolid from "./assets/icons/Solid/DongnaeIconSolid";
import MyIconSolid from "./assets/icons/Solid/MyIconSolid";
import MyIconOutline from "./assets/icons/Outline/MyIconOutline";
import NearIconOutline from "./assets/icons/Outline/NearIconOutline";
import NearIconSolid from "./assets/icons/Solid/NearIconSolid";
import ChattingIconOutline from "./assets/icons/Outline/ChattingIconOutline";
import ChattingIconSolid from "./assets/icons/Solid/ChattingIconSolid";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#212124",
            tabBarInactiveTintColor: "#212124",
            tabBarStyle: {
              borderTopWidth: 1,
              height: 84,
            },
            tabBarItemStyle: {
              paddingBottom: 6,
            },
            tabBarShowLabel: true,
          }}
        >
          <Tab.Screen
            name="홈"
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return focused ? (
                  <HomeIconSolid size={size} fillColor={color} />
                ) : (
                  <HomeIconOutline size={size} fillColor={color} />
                );
              },
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="동네생활"
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return focused ? (
                  <DongnaeIconSolid size={size} fillColor={color} />
                ) : (
                  <DongnaeIconOutline size={size} fillColor={color} />
                );
              },
            }}
            component={DongnaeScreen}
          />
          <Tab.Screen
            name="내 근처"
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return focused ? (
                  <NearIconSolid size={size} fillColor={color} />
                ) : (
                  <NearIconOutline size={size} fillColor={color} />
                );
              },
            }}
            component={NearScreen}
          />
          <Tab.Screen
            name="채팅"
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return focused ? (
                  <ChattingIconSolid size={size} fillColor={color} />
                ) : (
                  <ChattingIconOutline size={size} fillColor={color} />
                );
              },
            }}
            component={ChattingScreen}
          />
          <Tab.Screen
            name="나의 당근"
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return focused ? (
                  <MyIconSolid size={size} fillColor={color} />
                ) : (
                  <MyIconOutline size={size} fillColor={color} />
                );
              },
            }}
            component={MyScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
