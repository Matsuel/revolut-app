import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    cardsContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "10%",
    },
    card: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        flexDirection: "row",
    },
    cardLeft: {
        width: "70%",
        height: "auto",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginRight: "5%",
    },
    cardTitle: {
        color: "#000",
        fontSize: 20,
        fontWeight: "600",
        marginTop: "15%",
        marginBottom: "5%",
    },
    cardDescription: {
        color: "#bcc4cc",
        fontSize: 15,
        fontWeight: "500",
    },
    cardImage: {
        width: "28%",
        height: "auto",
    },
    cardIconWrapper: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#0d6efd",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
    },
});