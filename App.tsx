import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./src/components/bottomTab/BottomTabs";
import Enter from "./src/screens/Enter";

export default function App() {
  const [isloggedIn, setisloggedIn] = useState(false);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      {isloggedIn ? <BottomTabs /> : <Enter />}
    </SafeAreaProvider>
  );
}
