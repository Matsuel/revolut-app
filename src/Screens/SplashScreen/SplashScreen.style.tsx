import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    text: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "500",
    },
    progressBar : {
        width: "80%",
        height: 10,
        backgroundColor: "#000",
        borderRadius: 10,
        marginTop: "20%"
    },
    progress: {
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: 10
    }
});