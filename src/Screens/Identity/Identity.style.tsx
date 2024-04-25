import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    title: {
        width: "90%",
        color: "#000",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "25%",
    },
    image: {
        width: 300,
        height: 300,
        marginTop: "10%",
    },
    instructions: {
        width: "100%",
        height: "auto",
        marginTop: "10%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: "10%",
    },
    instruction: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 15,
        padding: 15,
    },
    instructionText: {
        width: "80%",
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});