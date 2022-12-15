import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import ActionButton from "../components/ActionButton";
import { resetUser } from "../slices/userSlice";
import { auth } from "../firebase";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(resetUser());
        navigation.replace("Login");
      })

      .catch((error) => alert(error.message));
  };

  const navigationToOrders = () => {
    navigation.navigate("YourOrders");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
      <View style={styles.image}>
        <Image source={require("../assets/recyclapp2.png")} />
        <Text style={styles.h1}>RecyclApp</Text>
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <View style={[styles.content, styles.elevation]}>
        <ActionButton
          onPress={() => navigation.navigate("Map")}
          buttonText="Order pick up"
        />
        <ActionButton onPress={navigationToOrders} buttonText="Your orders" />

        <ActionButton
          onPress={() => navigation.navigate("EditUserInfo")}
          buttonText="Account info"
        />
        <ActionButton
          onPress={() => navigation.navigate("ContactInfo")}
          buttonText="Contact info"
        />
        <ActionButton onPress={handleSignOut} buttonText="Sign out" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#99E4F0",
  },
  image: {
    marginRight: "40%",
    marginTop: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#99E4F0",
    width: "100%",
  },
  icon: {
    flex: 1,
    resizeMode: "contain",
    height: 40,
    marginLeft: -15,
  },
  h1: {
    fontSize: 32,
    margin: -20,
  },
  content: {
    backgroundColor: "#ffffff",
    padding: 32,
    borderRadius: 12,
    borderTopRightRadius: 64,
    height: "60%",
    width: "80%",
    marginBottom: "25%",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 24,
    marginTop: 15,
  },
  elevation: {
    color: "#000000",
    shadowOffset: { width: 15, height: 5 },
    elevation: 5,
    shadowOpacity: 0.1,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#59C81E",
    width: "100%",
    padding: 16,
    borderRadius: 24,
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOutline: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderColor: "#59C81E",
    borderWidth: 2,
  },
  buttonText: {
    flex: 2,
    marginLeft: 10,
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
  },
});
