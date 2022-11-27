import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from "../firebase";
import { setUser } from "../slices/userSlice";

const Home = () => {
    const navigation = useNavigation();

    const Navbar = () => {
        const { user, logOut } = UserAuth();
        const navigate = useNavigate();

        const handleLogout = async () => {
            try {
                await logOut();
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"white"}
                barStyle="dark-content"
            />
            <Text style={styles.h1}>RecyclApp</Text>
            <Image source={require("../assets/recyclapp2.png")} />
            <View style={styles.inputContainer}>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={moveToYourOrders.js}
                    style={styles.button}>
                    <Text style={styles.buttonText}>New pickup</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={moveToEditUserInfo.jsx}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Account info</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={moveContactInfo.jsx}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Contact us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={moveToLoginScreen.jsx}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Home

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