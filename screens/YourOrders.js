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

const Images = {
  icons: {
    furniture: require("../assets/tuoli.png"),
    electronics: require("../assets/laite.png"),
  },
};

const Data = [
  {
    id: 1,
    title: "Sofa pick up",
    icon: "furniture",
    dateCreated: "25.11.22",
    status: "Finished",
    details: "1 sofa, 1 armchair for pickup.",
    arrival: "26.11, 18:00",
  },
  {
    id: 2,
    title: "Kitchen cabinet",
    icon: "furniture",
    dateCreated: "26.11.22",
    status: "In progress",
    details: "Old kitchen cabinet for pickup.",
    arrival: "28.11, 15:00",
  },
  {
    id: 3,
    title: "Television",
    icon: "electronics",
    dateCreated: "27.11.22",
    status: "In progress",
    details: "Recycling of an old TV",
    arrival: "29.11, 17:00",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={styles.button}>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, backgroundColor]}
    >
      <Image style={styles.icon} source={Images.icons[item.icon]} />
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  </View>
);

const YourOrders = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#59C81E";
    const color = item.id === selectedId ? "#ffffff" : "#000000";

    const moveToOrder = () => {
      navigation.navigate("OrderStatus", {
        id: item.id,
        title: item.title,
        icon: item.icon,
        dateCreated: item.dateCreated,
        progress: item.status,
        details: item.details,
        arrival: item.arrival,
      });
    };

    return (
      <View>
        <Item
          item={item}
          onPress={() => moveToOrder()}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
          style={styles.item}
        ></Item>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
      <View style={styles.image}>
        <Image source={require("../assets/recyclapp2.png")} />
        <Text style={styles.h1}>RecyclApp</Text>
      </View>
      <View style={[styles.content, styles.elevation]}>
        <View style={styles.buttonContainer}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
      </View>
    </View>
  );
};
export default YourOrders;

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
    width: 40,
    marginLeft: -35,
  },
  title: {
    flex: 2,
    margin: 0,
    marginLeft: 12,
    fontSize: 16,
  },
  h1: {
    fontSize: 32,
    margin: 0,
  },
  content: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 12,
    borderTopRightRadius: 64,
    height: "60%",
    width: "85%",
    marginBottom: "25%",
    alignItems: "flex-start",
  },
  inputContainer: {
    width: "80%",
  },
  elevation: {
    color: "#000000",
    shadowOffset: { width: 15, height: 5 },
    elevation: 5,
    shadowOpacity: 0.1,
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
    padding: 8,
    borderRadius: 24,
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  item: {
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
});
