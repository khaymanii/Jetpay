import { StyleSheet, View } from "react-native";
import React from "react";
import Signup2 from "./(screens)/Signup2";

export default function Index() {
  return (
    <View style={styles.container}>
      <Signup2 />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
