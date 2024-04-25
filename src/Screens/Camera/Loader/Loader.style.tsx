import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loader: {
        position: "absolute",
        bottom: 0,
        width: "120%",
        height: "110%",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 12,
    },
    loaderView: {
        position: "absolute",
        bottom: "4%",
        width: "90%",
        height: "26%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        left: "5%",
    },
    loaderWrapper: {
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    loaderText: {
        color: "#000",
        fontSize: 24,
        fontWeight: "700",
    },
});