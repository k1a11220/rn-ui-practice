import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./src/components/bottomTab/BottomTabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTabs />
    </SafeAreaProvider>
  );
}
