import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Avatar } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import InfoField from "../components/InfoField";
import ActionButton from "../components/ActionButton";
import BackButton from "../components/BackButton";
import { getUser, setUser, clearUser } from "../slices/userSlice";
import { auth } from "../firebase";
import { persistor } from "../store";

const EditUserInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(getUser);
  const [userInfo, setUserInfo] = useState(userData);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onInfoFieldChange = (fieldName, data) => {
    setUserInfo({ ...userInfo, [fieldName]: data });
    setButtonDisabled(false);
  };

  const updateUserData = () => {
    if (userData.email !== userInfo.email) {
      auth.currentUser
        .updateEmail(userInfo.email)
        .then(() => {
          // dispatch(clearUser());
          // persistor.pause();
          // persistor.flush().then(() => {
          //   return persistor.purge();
          // });
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
    if (userData.phoneNumber !== userInfo.phoneNumber) {
      dispatch(setUser({ ...userInfo, phoneNumber: userInfo.phoneNumber }));
      setButtonDisabled(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Account information</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Avatar
          size={90}
          rounded
          source={{
            uri:
              userData?.photoURL ||
              "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg",
          }}
        />
        <View style={[styles.infoFieldWrapper, { marginTop: 20 }]}>
          <Text style={styles.fieldDescription}>Name</Text>
          <InfoField
            fieldText={userInfo?.displayName || "-"}
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
            fieldText={userInfo?.phoneNumber || "-"}
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
    width: "100%",
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
