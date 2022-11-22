import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={30} />
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

export default BackButton;
