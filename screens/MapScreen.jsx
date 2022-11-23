import React from "react";
import { View } from "react-native";
import SearchField from "../components/SearchField";
import Map from "../components/Map";
import BackButton from "../components/BackButton";

const MapScreen = () => {
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
      </View>
      <View style={{ flex: 1 }}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;
