import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    
    .catch(error => alert(error.message))
  }
  
  const navigationToOrders=()=>{
    navigation.navigate("YourOrders")
  }

  return (
    <View style = {styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>

          <TouchableOpacity
        onPress={navigationToOrders}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Your orders</Text>
          </TouchableOpacity>
    </View>

  )
}

export default HomeScreen

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