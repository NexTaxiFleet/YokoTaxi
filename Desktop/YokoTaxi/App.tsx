import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; // or your own loading component
import { Router } from "expo-router"; // or your routing/navigation component

export default function App() {
  const [fontsLoaded] = useFonts({
    Jakarta: require("./assets/fonts/Jakarta.ttf"),
    "Jakarta-Bold": require("./assets/fonts/JakartaBold.ttf"),
    // add others here
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Router />;
}
