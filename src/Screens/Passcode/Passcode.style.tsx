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
        transform: [{rotate: '180deg'}] 
    }
});