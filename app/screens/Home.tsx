import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "red",
  },
});
