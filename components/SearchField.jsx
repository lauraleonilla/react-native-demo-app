import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

const SearchField = () => {
  return (
    <GooglePlacesAutocomplete
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      placeholder="Where from?"
      styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
      minLength={2}
      onFail={(error) => console.log("Error fetching locations", error)}
      query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        console.log("DATA", data);
        // dispatch(
        //   setOrigin({
        //     location: details.geometry.location,
        //     description: data.description,
        //   })
        // );
        // dispatch(setDestination(null));
      }}
      fetchDetails
      returnKeyType="search"
    />
  );
};

export default SearchField;
