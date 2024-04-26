import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    plans: {
        width: "100%",
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    plan: {
        width: "25%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        padding: 5,
        backgroundColor: "transparent",
    },
    planSelected: {
        width: "25%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 5,
        backgroundColor: "#fff",
    },
    planTextActive: {
        color: "#000",
        fontSize: 14,
        fontWeight: "800",
    },
    planText: {
        color: "#bcc4cc",
        fontSize: 14,
        fontWeight: "800",
    },
});