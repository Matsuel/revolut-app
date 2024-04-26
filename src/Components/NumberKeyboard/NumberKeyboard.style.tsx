import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    arrowDisabled: {
        backgroundColor: "#e8f0fc",
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