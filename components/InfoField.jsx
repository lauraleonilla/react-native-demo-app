import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const InfoField = ({ fieldText, onChange, fieldName }) => {
  return (
    <View style={styles.infoField}>
      <TextInput
        style={styles.input}
        value={fieldText || ""}
        placeholderTextColor="#000"
        onChangeText={(text) => onChange(fieldName, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    fontSize: 15,
  },
  infoField: {
    width: "100%",
    backgroundColor: "hsla(133, 95%, 37%, 0.5)",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default InfoField;
