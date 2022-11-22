import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import ActionButton from "../components/ActionButton";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })

      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <ActionButton onPress={handleSignOut} buttonText="Sign out" />
      <ActionButton
        onPress={() => navigation.navigate("EditUserInfo")}
        buttonText="Edit user info"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});
