import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
    },
    top: {
        width: "100%",
        height: "10%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        marginTop: "3%",
    },
    input: {
        width: "70%",
        height: 50,
        backgroundColor: "#edeff2",
        color: "#000",
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
    },
    cancelButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    cancelText: {
        color: "#0d6efd",
        fontSize: 18,
    },
    countryList: {
        width: "95%",
        height: "90%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginTop: 10,
        padding: 5,
    },
    country: {
        width: "100%",
        height: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 15,
        gap: 30,
        backgroundColor: "#f5f8ff",
        borderRadius: 12,
        marginTop: 5,
    },
    countryText: {
        color: "#000",
        fontSize: 18,
    }
});