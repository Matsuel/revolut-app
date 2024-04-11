import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#000",
    },
    top: {
        width: "100%",
        height: "auto",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "20%",
        flexDirection: "row",
        paddingLeft: "5%"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "500",
        marginLeft: "5%"
    },
    title : {
        width: "90%",
        color: "#fff",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "5%"
    },
    bottom: {
        position: "absolute",
        bottom: "8%",
        width: "100%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    buttonLogin: {
        width: "45%",
        height: "60%",
        borderRadius: 30,
        backgroundColor: "#191a1f",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTextLogin:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "400",
    },
    buttonSignUp: {
        width: "45%",
        height: "60%",
        borderRadius: 30,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTextSignUp: {
        color: "#000",
        fontSize: 18,
        fontWeight: "400",
    }
});