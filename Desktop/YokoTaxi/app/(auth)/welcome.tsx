import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topRightContainer}>
        <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  topRightContainer: {
    alignItems: "flex-end",
    padding: 20,
  },
  skipText: {
    color: "black",
    fontSize: 12,
    fontFamily: "Jakarta-Bold",
  },
});

export default Onboarding;
