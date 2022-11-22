import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Avatar } from "@rneui/themed";
import { useSelector } from "react-redux";
import { getUser } from "../slices/userSlice";
import InfoField from "../components/InfoField";
import ActionButton from "../components/ActionButton";

const EditUserInfo = () => {
  const user = useSelector(getUser);
  console.log("ÄYYYYYY", user.user.user);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Account information</Text>
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
        <InfoField fieldText={user?.user?.user?.displayName || "-"} />
        <InfoField fieldText={user?.user?.user?.email} />
        <InfoField fieldText={user?.user?.user?.phoneNumber || "-"} />
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
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditUserInfo;
