import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topContainer}>
        <Text>Welcome!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    alignItems: "center", // horizontal centering
    paddingTop: 10, // space from top
  },
});

export default Onboarding;
