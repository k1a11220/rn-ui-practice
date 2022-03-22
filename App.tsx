import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PlusIconOutline from "./assets/icons/Outline/PlusIconOutline";
import BottomTabs from "./src/components/bottomTab/BottomTabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <BottomTabs />
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles.touchableOpacityStyle}
      >
        <PlusIconOutline size={20} fillColor={"#ffffff"} />
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: "absolute",
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FE7E36",
    alignItems: "center",
    justifyContent: "center",
    right: 16,
    bottom: 90,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
