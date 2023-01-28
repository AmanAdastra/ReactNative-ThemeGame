import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GameSettingsScreen from "./screens/GameSettingsScreen";
import GameOverScreen from "./screens/GameOverScreen";
import PlayGameScreen from "./screens/PlayGameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen  name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={GameSettingsScreen} />
          <Stack.Screen name="Game" component={PlayGameScreen} />
          <Stack.Screen name="End" component={GameOverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
