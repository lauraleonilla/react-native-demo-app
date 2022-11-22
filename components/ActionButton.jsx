import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ActionButton = ({ buttonText, onPress, icon: Icon, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
      {Icon ? <Icon /> : null}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#058F1B",
    borderRadius: "20%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default ActionButton;
