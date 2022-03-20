import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
