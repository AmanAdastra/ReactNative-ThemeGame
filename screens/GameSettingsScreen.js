import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../components/Layout/BackgroundLayout";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const StartScreen = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <PrimaryButton buttonText="Go Back" onPress={()=>navigation.navigate("Home")} ></PrimaryButton>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartScreen;
