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
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#058F1B",
    borderRadius: "20%",
    marginTop: "5%",
  },
  disabledContainer: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6d6d6",
    borderRadius: "20%",
    marginTop: "5%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  disabledButtonText: {
    color: "#696969",
    fontSize: 20,
  },
});

export default ActionButton;
