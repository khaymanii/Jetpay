import { StyleSheet, View } from "react-native";
import React from "react";
import Splash from "./(screens)/Splash";

export default function Index() {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
