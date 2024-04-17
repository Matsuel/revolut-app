import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        width: "70%",
        color: "#000",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "25%",
    },
    form: {
        width: "100%",
        height: "7%",
        marginTop: "15%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 25,
    },
    inputContainer: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: "100%",
        color: "#000",
        backgroundColor: "#edeff2",
        padding: 15,
        paddingBottom: 5,
        borderRadius: 12,
        fontSize: 16,
    },
    label: {
        position: "absolute",
        zIndex: 1,
        top: 3,
        left: 0,
        marginLeft: 15,
        color: "#737a86",
        fontSize: 16,
    },
    acceptMail: {
        width: "100%",
        height: "9%",
        marginTop: "15%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
    acceptMailText: {
        width: "70%",
        color: "#737a86",
        fontSize: 16,
    },
    buttons: {
        marginTop: "8%",
    },
});