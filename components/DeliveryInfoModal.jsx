import React from "react";
import { StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "./ActionButton";

const DeliveryInfo = () => {
  return (
    <LinearGradient colors={["#8DFAA5", "#99E4F0"]} style={styles.container}>
      <ActionButton
        buttonText="Place order"
        onPress={() =>
          Alert.alert("Order placed! See My orders page for updates.")
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99E4F0",
  },
});

export default DeliveryInfo;
