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
    skip: {
        width: "90%",
        marginTop: "15%",
        alignItems: "flex-end",
    },
    skipText: {
        color: "#007aff",
        fontSize: 18,
        fontWeight: "700",
    },
    title: {
        width: "90%",
        color: "#000",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "5%",
    },
    plans: {
        width: "90%",
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    plan: {
        width: "24%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        padding: 5,
        backgroundColor: "transparent",
    },
    planSelected: {
        width: "24%",
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