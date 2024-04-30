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
    subtitle: {
        width: "90%",
        color: "#777",
        fontSize: 16.5,
        fontWeight: "700",
        marginTop: "7%",
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
        gap: 30
    },
    input: {
        width: 50,
        height: 50,
        backgroundColor: "#edeff2",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "700",
    },
    inputFocused: {
        backgroundColor: "#e0e3e7",
    }
})