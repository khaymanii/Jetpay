import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";

type InputProps = TextInputProps & {
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

const Input: React.FC<InputProps> = ({
  containerStyle,
  inputStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={[styles.input, inputStyle]} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 55,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Input;
