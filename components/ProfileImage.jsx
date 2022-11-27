import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../firebase";
import { setImageDownloadUrl, getUser } from "../slices/userSlice";

const ProfileImage = () => {
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
    if (image && image.uri) {
      return image.uri;
    }
    if (userData?.photoURL) {
      return userData.photoURL;
    }
    return "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg";
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Avatar size={150} rounded source={{ uri: getImageSource() }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 50,
  },
});
