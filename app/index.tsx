import { StyleSheet, View } from "react-native";
import React from "react";
import Signup3 from "./(screens)/Signup3";

export default function Index() {
  return (
    <View style={styles.container}>
      <Signup3 />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
