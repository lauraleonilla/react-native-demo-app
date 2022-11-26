import React, { useRef, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { GOOGLE_MAPS_KEY } from "@env";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const coordinates = useSelector(selectOrigin);
  const mapRef = useRef(null);
  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      mapType="mutedStandard"
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: coordinates?.location.lat,
        longitude: coordinates?.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: coordinates?.location.lat,
          longitude: coordinates?.location.lng,
        }}
      />
      {/* {origin && destination && (
          <MapViewDirections
          origin={directionsOrigin}
          destination={directionsDestination}
          apikey={GOOGLE_MAPS_KEY}
          strokeWidth={3}
          strokeColor="black"
          />
        )} */}
      {/* {origin?.location && (
          <Marker
          title="Origin"
          description={origin.description}
          identifier="origin"
          coordinate={directionsOrigin}
          />
          )}
          {destination?.location && (
            <Marker
            title="Destination"
            description={destination.description}
            identifier="destination"
            coordinate={directionsDestination}
            />
          )} */}
    </MapView>
  );
};

export default Map;
