import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { getUser } from "../slices/userSlice";

const EditUserInfo = () => {
  const user = useSelector(getUser);
  console.log("ÄYYYYYY", user);
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default EditUserInfo;
