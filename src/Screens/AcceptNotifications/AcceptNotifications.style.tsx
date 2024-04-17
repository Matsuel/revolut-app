import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    top: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginTop: "20%",
    },
    title: {
        width: "90%",
        color: "#000",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "5%",
    },
    subtitle: {
        width: "90%",
        color: "#000",
        fontSize: 16.5,
        fontWeight: "700",
        marginTop: "7%",
    },
});