import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { Ionicons } from "react-native-vector-icons";
import SearchField from "../components/SearchField";
import Map from "../components/Map";
import BackButton from "../components/BackButton";
import { setOrigin } from "../slices/navSlice";

const MapScreen = () => {
  const dispatch = useDispatch();

  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // setErrorMsg("Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    dispatch(
      setOrigin({
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      })
    );
  };

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (userLocation) {
  //   text = JSON.stringify(userLocation);
  //   console.log({ text });
  // }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          paddingTop: "15%",
          paddingHorizontal: "5%",
        }}
      >
        <BackButton />
        <SearchField />
        <TouchableOpacity onPress={() => getUserLocation()}>
          <Ionicons name="navigate" size={30} />
        </TouchableOpacity>
        <Text>Use current location</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
