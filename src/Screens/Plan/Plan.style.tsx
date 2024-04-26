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
    planText: {
        color: "#000",
        fontSize: 14,
        fontWeight: "800",
    },

    planDetailsContainer: {
        width: "90%",
        marginTop: "10%",
    },
    planInfos: {
        width: "100%",
        height: "auto",
    },
    planDetails: {
        width: "100%",
        height: "auto",
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
    },
    planName: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
    },
    planPrice: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
    planDescription: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    button: {
        position: "absolute",
        width: "25%",
        right: 10,
        top: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
    },
    planShortText: {
        color: "#000",
        fontSize: 14,
        fontWeight: "700",
    },
});