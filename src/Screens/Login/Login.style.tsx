import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#000",
    },
    top: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginTop: "20%",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    title: {
        width: "90%",
        color: "#fff",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "5%",
    },
    subtitle: {
        width: "90%",
        color: "#d3d3d3",
        fontSize: 18,
        fontWeight: "400",
        marginTop: "7%",
    },
    form: {
        width: "90%",
        height: "7%",
        marginTop: "7%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    country: {
        width: "25%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191a1f",
        borderRadius: 12,
    },
    input: {
        width: "75%",
        height: "100%",
        color: "#fff",
        backgroundColor: "#191a1f",
        padding: 15,
        paddingRight: 45,
        borderRadius: 12,
        fontSize: 18,
    },
    noAccount: {
        width: "90%",
        marginTop: "7%",
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
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "#0d6efd",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: "10%",
    },
    buttonDisabled: {
        backgroundColor: "#0d6efd50",
        opacity: 0.7,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    clear:{
        position: "absolute",
        right: 5,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        padding: 3,
        borderRadius: 50,
    },
});