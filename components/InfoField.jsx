import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const InfoField = ({ fieldText, onChange, fieldName }) => {
  return (
    <View style={styles.infoField}>
      <TextInput
        value={fieldText}
        placeholderTextColor="#000"
        onChangeText={(text) => onChange(fieldName, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  infoField: {
    backgroundColor: "hsla(133, 95%, 37%, 0.5)",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
    marginBottom: 25,
  },
});

export default InfoField;
