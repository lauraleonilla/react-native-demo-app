import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import InfoField from "../components/InfoField";
import ActionButton from "../components/ActionButton";
import BackButton from "../components/BackButton";
import UploadScreen from "../components/Upload";
import {
  getUser,
  setUser,
  setUserPhoneNumber,
  getUserPhoneNumber,
  getImageDownloadUrl,
} from "../slices/userSlice";
import { auth } from "../firebase";

const EditUserInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(getUser);
  const userPhone = useSelector(getUserPhoneNumber);
  const imageUrl = useSelector(getImageDownloadUrl);
  const [userInfo, setUserInfo] = useState(userData);
  const [userPhoneNumber, setUserPhoneNumberInfo] = useState(userPhone);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (imageUrl) {
      setButtonDisabled(false);
    }
  }, [imageUrl]);

  const onInfoFieldChange = (fieldName, data) => {
    if (fieldName === "phoneNumber") {
      setUserPhoneNumberInfo(data);
      setButtonDisabled(false);
    } else {
      setUserInfo({ ...userInfo, [fieldName]: data });
      setButtonDisabled(false);
    }
  };

  const updateUserData = () => {
    if (userData.email !== userInfo.email) {
      auth.currentUser
        .updateEmail(userInfo.email)
        .then(() => {
          auth
            .signOut()
            .then(() => {
              navigation.navigate("Login");
            })
            .catch((error) => alert(error.message));
        })
        .catch((error) => {
          console.log("Error updating user", error);
        });
    }
    if (userData.displayName !== userInfo.displayName) {
      auth.currentUser
        .updateProfile({
          displayName: userInfo.displayName,
        })
        .then(() => {
          dispatch(setUser({ ...userInfo, displayName: userInfo.displayName }));
          setButtonDisabled(true);
        })
        .catch((error) => {
          console.log("Error updating user", error);
        });
    }
    if (imageUrl) {
      auth.currentUser
        .updateProfile({
          photoURL: imageUrl,
        })
        .then(() => {
          dispatch(setUser({ ...userInfo, photoURL: imageUrl }));
          setButtonDisabled(true);
        })
        .catch((error) => {
          console.log("Error updating user", error);
        });
    }
    if (userPhone !== userPhoneNumber) {
      dispatch(setUserPhoneNumber({ phoneNumber: userPhoneNumber }));
      setButtonDisabled(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.backButtonContainer}>
            <BackButton />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Account information</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <UploadScreen />
          <View style={[styles.infoFieldWrapper, { marginTop: 20 }]}>
            <Text style={styles.fieldDescription}>Name</Text>
            <InfoField
              fieldText={userInfo?.displayName}
              onChange={onInfoFieldChange}
              fieldName="displayName"
            />
          </View>
          <View style={styles.infoFieldWrapper}>
            <Text style={styles.fieldDescription}>Email</Text>
            <InfoField
              fieldText={userInfo?.email}
              onChange={onInfoFieldChange}
              fieldName="email"
            />
          </View>
          <View style={styles.infoFieldWrapper}>
            <Text style={styles.fieldDescription}>Phonenumber</Text>
            <InfoField
              fieldText={userPhoneNumber}
              onChange={onInfoFieldChange}
              fieldName="phoneNumber"
            />
          </View>
          <ActionButton
            buttonText="Save"
            style={{ marginTop: 30 }}
            onPress={() => updateUserData()}
            disabled={buttonDisabled}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "90%",
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTextContainer: {
    width: "90%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButtonContainer: {
    width: "10%",
  },
  infoContainer: {
    flex: 1,
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoFieldWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fieldDescription: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default EditUserInfo;
