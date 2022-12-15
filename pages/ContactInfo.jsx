import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "../components/ActionButton";

const ContactInfo = () => {
  const navigation = useNavigation();

  const sendMessage = () => {
    Alert.alert("", "Your message has been sent");
  };
  return (
    <LinearGradient colors={["#8DFAA5", "#99E4F0"]} style={styles.container}>
      <Text style={styles.contactInfoText}>Sign in with Facebook</Text>
      <Text style={styles.contactInfoText}>012 345 5678</Text>
      <Text style={styles.contactInfoText}>recyclapp@gmail.com</Text>
      <Text style={styles.contactInfoText}>
        Imaginary Road 1A, 01230 Vantaa
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write here..."
          value={String}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ActionButton onPress={sendMessage} buttonText="Send message" />
        <ActionButton
          onPress={() => navigation.navigate("Home")}
          buttonText="Return"
        />
      </View>
    </LinearGradient>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
    padding: "10%",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  contactInfoText: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
  },
});
