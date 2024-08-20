import { StyleSheet, View } from "react-native";
import React from "react";
import Signup1 from "./(screens)/Signup1";

export default function Index() {
  return (
    <View style={styles.container}>
      <Signup1 />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
