import React, { useRef, useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GOOGLE_MAPS_KEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";

const Map = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const [directionsOrigin, setDirectionsOrigin] = useState(null);
  const [directionsDestination, setDirectionsDestination] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    mapRef.current.fitToSuppliedMarkers(["origin", "destiation"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
    setDirectionsOrigin({
      latitude: origin.location.lat,
      longitude: origin.location.lng,
    });
    setDirectionsDestination({
      latitude: destination.location.lat,
      longitude: destination.location.lng,
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin, destination, GOOGLE_MAPS_KEY]);

  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      mapType="mutedStandard"
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lng,
        }}
      />
      {origin && destination && (
        <MapViewDirections
          origin={directionsOrigin}
          destination={directionsDestination}
          apikey={GOOGLE_MAPS_KEY}
          strokeWidth={3}
          strokeColor="blue"
        />
      )}
      {origin?.location && (
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
      )}
    </MapView>
  );
};

export default Map;
