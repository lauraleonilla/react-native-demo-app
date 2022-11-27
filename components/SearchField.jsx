import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";

const SearchField = ({ setLocation, placeholder }) => {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      placeholder={placeholder}
      styles={{
        container: { marginLeft: 5, marginRight: 5 },
        textInput: { fontSize: 18 },
      }}
      minLength={2}
      onFail={(error) => console.log("Error fetching locations", error)}
      query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        dispatch(
          setLocation({
            location: details.geometry.location,
            description: data.description,
          })
        );
        // dispatch(setDestination(null));
      }}
      fetchDetails
      returnKeyType="search"
    />
  );
};

export default SearchField;
