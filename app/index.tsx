import { StyleSheet, View } from "react-native";
import React from "react";
import Beneficiaries from "./(screens)/Beneficiaries";

export default function Index() {
  return (
    <View style={styles.container}>
      <Beneficiaries />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
