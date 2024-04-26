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
    paragraph: {
        width: "90%",
        color: "#000",
        fontSize: 18,
        marginTop: "5%",
        fontWeight: "700",
    },
    learnMore: {
        width: "90%",
        marginTop: "5%",        
    },
    learnMoreText: {
        color: "#007aff",
        fontSize: 18,
        fontWeight: "700",
        textDecorationLine: "underline",
    },
    image: {
        width: 237,
        height: 188,
        marginTop: "25%",
        marginBottom: "30%",
    }
});