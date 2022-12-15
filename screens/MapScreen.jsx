import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "react-native-vector-icons";
import SearchField from "../components/SearchField";
import Map from "../components/Map";
import BackButton from "../components/BackButton";
import {
  setOrigin,
  setDestination,
  selectDestination,
  selectOrigin,
} from "../slices/navSlice";
import DeliveryInfo from "../components/DeliveryInfoModal";

const MapScreen = () => {
  const [fromLocationPlaceholder, setFromLocationPlaceholder] =
    useState("Where from?");

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();

  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setFromLocationPlaceholder("Your location");
    dispatch(
      setOrigin({
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#99E4F0",
        marginBottom: "-10%",
        paddingTop: 50,
      }}
    >
      <View style={styles.originContainer}>
        <BackButton />
        <SearchField
          setOrigin={setOrigin}
          placeholder={fromLocationPlaceholder}
        />
        <TouchableOpacity onPress={() => getUserLocation()}>
          <Ionicons name="navigate" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.destinationContainer}>
        <SearchField setDestination={setDestination} placeholder="Where to?" />
      </View>
      <View style={{ flex: 1 }}>
        <Map />
        {origin && destination && <DeliveryInfo />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  originContainer: {
    width: "100%",
    paddingBottom: "5%",
    paddingHorizontal: "3%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationContainer: {
    width: "100%",
    paddingBottom: "5%",
    paddingHorizontal: "3%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchButton: {
    borderColor: "#59C81E",
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default MapScreen;
