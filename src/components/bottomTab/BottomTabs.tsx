import React from "react";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ChattingIconOutline from "assets/icons/Outline/ChattingIconOutline";
import DongnaeIconOutline from "assets/icons/Outline/DongnaeIconOutline";
import HomeIconOutline from "assets/icons/Outline/HomeIconOutline";
import MyIconOutline from "assets/icons/Outline/MyIconOutline";
import NearIconOutline from "assets/icons/Outline/NearIconOutline";
import ChattingIconSolid from "assets/icons/Solid/ChattingIconSolid";
import DongnaeIconSolid from "assets/icons/Solid/DongnaeIconSolid";
import HomeIconSolid from "assets/icons/Solid/HomeIconSolid";
import MyIconSolid from "assets/icons/Solid/MyIconSolid";
import NearIconSolid from "assets/icons/Solid/NearIconSolid";
import ChattingScreen from "screens/Chatting";
import DongnaeScreen from "screens/Dongnae";
import HomeScreen from "screens/Home";
import MyScreen from "screens/My";
import NearScreen from "screens/Near";
import BellIconOutline from "assets/icons/Outline/BellIconOutline";
import MenuIconOutline from "assets/icons/Outline/MenuIconOutline";
import SearchIconOutline from "assets/icons/Outline/SearchIconOutline";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "",
          headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: "#B2B2B2",
          },
          tabBarActiveTintColor: "#212124",
          tabBarInactiveTintColor: "#212124",
          tabBarStyle: {
            borderTopWidth: 0.5,
            borderTopColor: "#B2B2B2",
            // height: 84,
            // paddingBottom: 10,
          },
          tabBarItemStyle: {
            // paddingTop: 10,
            // paddingBottom: 10,
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
            title: "홈",

            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 24 }}>
                <Text style={styles.headerTitle}>중앙동</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={styles.headerIconContainer}>
                <TouchableOpacity style={styles.headerIcon}>
                  <SearchIconOutline size={"24"} fillColor={"#212124"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                  <MenuIconOutline size={"24"} fillColor={"#212124"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                  <BellIconOutline size={"24"} fillColor={"#212124"} />
                </TouchableOpacity>
              </View>
            ),
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
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 24 }}>
                <Text style={styles.headerTitle}>중앙동</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={styles.headerIconContainer}>
                <TouchableOpacity style={styles.headerIcon}>
                  <SearchIconOutline size={"24"} fillColor={"#212124"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                  <MenuIconOutline size={"24"} fillColor={"#212124"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                  <BellIconOutline size={"24"} fillColor={"#212124"} />
                </TouchableOpacity>
              </View>
            ),
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
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  headerIconContainer: {
    flexDirection: "row",
    marginRight: 24,
  },
  headerIcon: {
    marginLeft: 10,
  },
});

export default BottomTabs;
