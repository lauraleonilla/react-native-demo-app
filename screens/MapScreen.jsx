import React from "react";
import { View } from "react-native";
import SearchField from "../components/SearchField";
import Map from "../components/Map";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: "15%", paddingHorizontal: "5%" }}>
        <SearchField />
      </View>
      <View style={{ flex: 1 }}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
