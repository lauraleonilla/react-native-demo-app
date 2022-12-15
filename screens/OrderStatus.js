import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const OrderStatus = ({ route }) => {
  const itemTitle = route.params.title;
  const itemIcon = route.params.icon;
  const itemDate = route.params.dateCreated;
  const itemStatus = route.params.progress;
  const itemDetails = route.params.details;
  const itemArrival = route.params.arrival;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
      <View style={styles.image}>
        <Image source={require("../assets/recyclapp2.png")} />
        <Text style={styles.h1}>RecyclApp</Text>
      </View>
      <View style={[styles.content, styles.elevation]}>
        <View>
          <Text style={styles.title}>{itemTitle}</Text>
          <Text style={styles.title2}>Order status:</Text>
          <Text style={styles.orderItem}>Date created: {itemDate}</Text>
          <Text style={styles.orderItem}>Type: {itemIcon}</Text>
          <Text style={styles.orderItem}>Status: {itemStatus}</Text>
          <Text style={styles.orderItem}>Details: {itemDetails}</Text>
          <Text style={styles.orderItem}>
            Estimated time of arrival: {itemArrival}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#99E4F0",
  },
  title: {
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#59C81E",
  },
  title2: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
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
    margin: 0,
  },
  content: {
    backgroundColor: "#ffffff",
    padding: 32,
    borderRadius: 12,
    borderTopRightRadius: 64,
    height: "60%",
    width: "80%",
    marginBottom: "25%",
    alignItems: "flex-start",
  },
  elevation: {
    color: "#000000",
    shadowOffset: { width: 15, height: 5 },
    elevation: 5,
    shadowOpacity: 0.1,
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
  orderItem: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
  },
});
