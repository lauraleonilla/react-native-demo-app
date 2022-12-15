import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ActionButton = ({ buttonText, onPress, icon: Icon, style, disabled }) => {
  return (
    <TouchableOpacity
      style={[!disabled ? styles.container : styles.disabledContainer, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={!disabled ? styles.buttonText : styles.disabledButtonText}>
        {buttonText}
      </Text>
      {Icon ? <Icon /> : null}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#59C81E",
    width: "100%",
    padding: 16,
    borderRadius: 24,
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disabledContainer: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6d6d6",
    borderRadius: 12,
    marginTop: "5%",
  },
  buttonText: {
    color: "#000000",
    fontSize: 20,
  },
  disabledButtonText: {
    color: "#696969",
    fontSize: 20,
  },
});

export default ActionButton;
