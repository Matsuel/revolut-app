import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    title: {
        position: "absolute",
        zIndex: 2,
        top: 0,
        width: "90%",
        color: "#000",
        fontSize: 32,
        fontWeight: "700",
        marginTop: "25%",
    },
    camera: {
        width: "130%",
        height: "100%",
    },
    cameraBlur: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    faceContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    face: {
        width: 250,
        height: 300,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius: 12,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    
});