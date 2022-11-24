import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const YourOrders = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor={"white"}
      barStyle="dark-content"
      />
      <View style={styles.image}>
      <Image source={require("../assets/recyclapp2.png")} />
      <Text style={styles.h1}>RecyclApp</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        >
            <Image style={styles.icon} source={require("../assets/tuoli.png")} />
        <Text style={styles.buttonText}>Sofa pick up</Text>
          </TouchableOpacity>
          <TouchableOpacity
        style={styles.button}
        >
            <Image style={styles.icon} source={require("../assets/tuoli.png")} />
        <Text style={styles.buttonText}>Kitchen cabinet</Text>
          </TouchableOpacity>
          <TouchableOpacity
        style={styles.button}
        >
            <Image style={styles.icon} source={require("../assets/laite.png")} />
        <Text style={styles.buttonText}>Television</Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
  )
}

export default YourOrders

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
        resizeMode: 'contain',
        height:40,
        marginLeft: -15,
    },
    h1: {
        fontSize: 32,
        margin: -20,
      },
    content: {
        backgroundColor: "white",
        padding: 32,
        borderRadius: 12,
        borderTopRightRadius: 64,
        height: "60%",
        width: "80%",
        marginBottom: "25%",
        alignItems: "center",
    },
  inputContainer: {
    width:"80%",
  },
  input: {
    backgroundColor:"white",
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius: 24,
    marginTop: 15,
  }, 
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor:"#59C81E",
    width: "100%",
    padding: 16,
    borderRadius: 24,
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
    margin:8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOutline: {
    backgroundColor:"white",
    marginTop: 10,
    borderColor: "#59C81E",
    borderWidth: 2,
  },
  buttonText: {
    flex: 2,
    marginLeft:10,
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