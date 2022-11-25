import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../firebase";
import { setImageDownloadUrl, getUser } from "../slices/userSlice";

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const userData = useSelector(getUser);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (image && image.uri) {
      uploadImage();
    }
  }, [image]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const source = { uri: result.assets[0].uri };
    setImage(source);
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    try {
      await firebase.storage().ref().child(filename).put(blob);
      const imageDownloadUrl = await firebase
        .storage()
        .ref()
        .child(filename)
        .getDownloadURL();
      dispatch(setImageDownloadUrl({ imageDownloadUrl }));
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
  };

  const getImageSource = () => {
    if (userData?.photoURL) {
      return userData.photoURL;
    }
    if (image && image.uri) {
      return image.uri;
    }
    return "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg";
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Avatar size={100} rounded source={{ uri: getImageSource() }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: "center",
  },
});
