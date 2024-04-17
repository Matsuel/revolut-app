import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#f7f7f7",
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
        color: "#737a86",
        fontSize: 18,
        fontWeight: "400",
        marginTop: "7%",
    },
    form: {
        width: "90%",
        height: "7%",
        marginTop: "7%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 15,
    },
    input: {
        width: "14%",
        height: "100%",
        color: "#000",
        backgroundColor: "#edeff2",
        borderRadius: 12,
        textAlign: "center",
    },
    
    noAccount: {
        width: "90%",
        marginTop: "3%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    noAccountText: {
        color: "#0d6efd",
        fontSize: 18,
        fontWeight: "400",
    },
    noAccountButton: {
        marginLeft: 5,
    },
    signUp: {
        color: "#0d6efd",
        fontSize: 18,
        fontWeight: "700",
    },
});