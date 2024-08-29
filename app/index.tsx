import { StyleSheet, View } from "react-native";
import React from "react";
import SendMoney from "./(screens)/SendMoney";

export default function Index() {
  return (
    <View style={styles.container}>
      <SendMoney />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
