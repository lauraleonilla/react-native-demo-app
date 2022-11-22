import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const navigation=useNavigation()

const goBack = () => {
    navigation.navigate("Login")
}

const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("Registered with", user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <Text style={styles.h1}>RecyclApp</Text>
      <Image source={require('../assets/recyclapp1.png')} />
    <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput
      placeholder="Password"
      value={password}
      onChangeText={text => setPassword(text)}
      style={styles.input}
      secureTextEntry
      />
    </View>

    <View style= {styles.buttonContainer}>
      <Text> {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignUp}
        style={styles.button}
    >
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={goBack}
        style={[styles.button, styles.buttonOutline]}
    >
        <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#99E4F0",
      marginTop: -100,
    },
  inputContainer: {
    width:"80%",
    
  },
  h1: {
    fontSize: 32,
  },

  input: {
    backgroundColor:"white",
    paddingHorizontal: 15,
    paddingVertical:10,
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
    backgroundColor:"#59C81E",
    width: "100%",
    padding: 15,
    borderRadius: 24,
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
  },
  buttonOutline: {
    backgroundColor:"white",
    marginTop: 10,
    borderColor: "#59C81E",
    borderWidth: 2,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  })