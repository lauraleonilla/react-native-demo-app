import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Avatar } from "@rneui/themed";
import { useSelector } from "react-redux";
import { getUser } from "../slices/userSlice";
import InfoField from "../components/InfoField";
import ActionButton from "../components/ActionButton";
import BackButton from "../components/BackButton";

const EditUserInfo = () => {
  const user = useSelector(getUser);
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
              user?.user?.user?.photoURL ||
              "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg",
          }}
        />
        <InfoField fieldText={user?.user?.displayName || "-"} />
        <InfoField fieldText={user?.user?.email} />
        <InfoField fieldText={user?.user?.phoneNumber || "-"} />
        <ActionButton buttonText="Save" style={{ marginTop: 30 }} />
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
});

export default EditUserInfo;
