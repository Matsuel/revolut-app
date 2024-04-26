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
        width: "100%",
        color: "#000",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "25%",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#777",
        marginTop: 10,
    },

    passcodeInput: {
        width: "100%",
        height: 100,
        backgroundColor: "transparent",
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "700",
        color: "#bcc4cc",
        textAlign: "center",
    },
    


    passcodeKeyboard: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "56%",
        backgroundColor: "transparent",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    passcodeKey : {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "transparent",
    },
    passcodeKeyText: {
        fontSize: 24,
        fontWeight: "700",
    },
    arrow: { 
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        color: "#000",
        transform: [{rotate: '180deg'}] 
    },
    delete: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "transparent",
    },
    key: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#000",
    },
});