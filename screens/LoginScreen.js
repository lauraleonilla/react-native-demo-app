import { React, useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import { setUser } from "../slices/userSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPress, setIsPress] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        navigation.navigate("Home");
      }
    });
  }, []);

  const moveToRegisterPage = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user) {
          navigation.navigate("Home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
      <Text style={styles.h1}>RecyclApp</Text>
      <Image
        source={require("../assets/recyclapp2.png")}
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
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={moveToRegisterPage}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundcolor: "#8DFAA5",
    // backgroundimage: linear - gradient("#8DFAA5", "#99E4F0"),
  },
  btnNormal: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: "blue",
    borderWidth: 1,
    height: 30,
    width: 100,
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
    marginBottom: -15,
  },
});
