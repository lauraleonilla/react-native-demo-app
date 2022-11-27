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
import ProfileImage from "../components/ProfileImage";
import UserDetailWrapper from "../components/UserDetailWrapper";
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
          <ProfileImage />
          <UserDetailWrapper headerText="Name">
            <InfoField
              fieldText={userInfo?.displayName}
              onChange={onInfoFieldChange}
              fieldName="displayName"
            />
          </UserDetailWrapper>
          <UserDetailWrapper headerText="Email">
            <InfoField
              fieldText={userInfo?.email}
              onChange={onInfoFieldChange}
              fieldName="email"
            />
          </UserDetailWrapper>
          <UserDetailWrapper headerText="Phonenumber">
            <InfoField
              fieldText={userPhoneNumber}
              onChange={onInfoFieldChange}
              fieldName="phoneNumber"
            />
          </UserDetailWrapper>
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
  },
});

export default EditUserInfo;
