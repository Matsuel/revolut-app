import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    planDetailsContainer: {
        width: "100%",
        marginTop: "7%",
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
        fontSize: 32,
        fontWeight: "700",
        marginBottom: "3%"
    },
    planPrice: {
        color: "#bcc4cc",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: "2%"
    },
    planDescription: {
        color: "#bcc4cc",
        fontSize: 14,
        fontWeight: "700",
        marginBottom: "2%"
    },
    button: {
        position: "absolute",
        width: "auto",
        right: 10,
        top: "15%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 5,
        gap: 5,
    },
    buttonIcon: {
        width: 13,
        height: 13,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    planShortText: {
        color: "#000",
        fontSize: 13,
        fontWeight: "700",
    },

    features: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        marginTop: "5%",
    },
    featuresTitle: {
        color: "#bcc4cc",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: "5%"
    },
    feature: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "5%",
        gap: 10,
    },
    featureIconWrapper: {
        width: "12%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    featureTexts: {
        width: "80%",
        height: "auto",
    },
    featureIcon: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    featureTitle: {
        color: "#000",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: "2%"
    },
    featureSubtitle: {
        color: "#bcc4cc",
        fontSize: 15,
        fontWeight: "500",
        marginBottom: "2%"
    },

    bottom: {
        position: "absolute",
        width: "100%",
        backgroundColor: "transparent",
        bottom: -100,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonBottom: {
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 50,
        marginBottom: "3%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "400",
    },
    alert: {
        color: "#bcc4cc",
        fontSize: 12,
        fontWeight: "500",
    },
});