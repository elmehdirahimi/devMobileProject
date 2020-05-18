import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import TourGuide from "./screens/TourGuide";
import Explore from "./screens/Explore";
import Destination from "./screens/Destination";
const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcom" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TourGuide" component={TourGuide} />
            <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Destination" component={Destination}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
