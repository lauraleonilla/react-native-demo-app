import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const InfoField = ({ fieldText }) => {
  return (
    <View style={styles.infoField}>
      <TextInput placeholder={fieldText} placeholderTextColor="#000" />
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
    marginTop: 20,
  },
});

export default InfoField;
