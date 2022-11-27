import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import ActionButton from "../components/ActionButton";

const ContactInfo = () => {
    const navigation = useNavigation();

    const sendMessage = () => {
        var link = "mailto:recycl@example.com"
            + "?cc=myCCaddress@example.com"
            + "&subject=" + encodeURIComponent("This is my subject")
            + "&body=" + encodeURIComponent(document.getElementById('myText').value);

        window.location.href = link;
    };

    return (
        <View style={styles.container}>
            <Text><i class="fa fa-phone" aria-hidden="true"></i>012 345 5678
            </Text>
            <br></br>
            <Text><i class="fa fa-envelope" aria-hidden="true"></i>recyclapp@gmail.com
            </Text>
            <br></br>
            <Text><i class="fa fa-map-marker" aria-hidden="true"></i>Imaginary Road 1A, 01230 Vantaa
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Write here..."
                    value={String}
                    onChangeText={(text) => setMessage(text)}
                    style={styles.input}
                />
            </View>
            <ActionButton onPress={sendMessage} buttonText="Send message" />
            <ActionButton
                onPress={() => navigation.navigate("Send message")}
                buttonText="Return"
            />
        </View>
    );
};

export default ContactInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundcolor: "#8DFAA5",
        backgroundimage: linear - gradient("#8DFAA5", "#99E4F0"),
        marginTop: -100,
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        height: 100,
    },
    button: {
        backgroundColor: "#058F1B",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "lightblue",
        borderWidth: 2,
    },
    buttonText: {
        color: "black",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutlineText: {
        color: "black",
        fontWeight: "700",
        fontSize: 16,
    },
});
