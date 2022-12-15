import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goBack = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        console.log("Registered with", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
      <Text style={styles.h1}>RecyclApp</Text>
      <Image
        source={require("../assets/recyclapp1.png")}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goBack}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99E4F0",
    marginTop: -50,
  },
  inputContainer: {
    width: "80%",
  },
  h1: {
    fontSize: 32,
  },

  input: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 24,
    marginTop: 15,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#59C81E",
    width: "100%",
    padding: 15,
    borderRadius: 24,
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
  },
  buttonOutline: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderColor: "#59C81E",
    borderWidth: 2,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
  },
  image: {
    marginBottom: -20,
  },
});
