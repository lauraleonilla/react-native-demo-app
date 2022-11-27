import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetailWrapper = ({ headerText, children }) => {
  return (
    <View style={styles.infoFieldWrapper}>
      <Text style={styles.fieldDescription}>{headerText}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  infoFieldWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fieldDescription: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default UserDetailWrapper;
