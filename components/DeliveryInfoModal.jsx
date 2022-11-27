import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeliveryInfo = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99E4F0",
  },
});

export default DeliveryInfo;
