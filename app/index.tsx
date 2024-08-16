import { StyleSheet, View } from "react-native";
import React from "react";
import Welcome from "./(screens)/Welcome";

export default function Index() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
