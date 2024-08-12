import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  const [value, setValue] = useState("");

  function handlePress(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      <Button title="Disabled" onPress={handlePress} variant="disabled" />
      <Input
        placeholder="Enter your name"
        value={value}
        onChangeText={(text) => setValue(text)}
        containerStyle={styles.customContainer}
        inputStyle={styles.customInput}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  customContainer: {
    width: "20%",
  },
  customInput: {
    borderColor: "#6200EE",
    borderWidth: 2,
  },
});
