import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_MAPS_KEY } from "@env";

const Map = () => {
  const mapRef = useRef(null);
  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
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
