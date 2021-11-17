import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContainer: {
        height: "7%",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(209,209,209)",
        paddingVertical: 10,
        justifyContent: "space-between",
        marginTop: 60,
        marginHorizontal: 20
    },
    acronymContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgb(33,144,208)"
    },
    acronym: {
        fontFamily: "OpenSans-Bold",
        fontSize: 25,
        color: "rgb(33,144,208)"
    },
    name: {
        fontFamily: "OpenSans-Regular",
        fontSize: 25,
        color: "black"
    },
    designation: {
        fontFamily: "OpenSans-Regular",
        fontSize: 15
    },
    dutyContainer: {
        borderBottomWidth: 1,
        borderColor: "rgb(209,209,209)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10
    },
    destinationText: {
        fontFamily: "OpenSans-Regular",
        color: "grey",
        fontSize: 15,
        marginTop: 4
    },
    timingText: {
        fontFamily: "OpenSans-Regular",
        color: "red",
        fontSize: 15,
        alignSelf: "flex-end",
        marginBottom: 5,
        textAlign: "right"
    },
    welcomeText: {
        color: "black",
        fontSize: 20,
        marginLeft: 20,
        fontFamily: "OpenSans-Bold"
    },
    extraText: {
        fontFamily: "OpenSans-Regular",
        color: "grey",
        fontSize: 15,
        textAlign: "right"
    },
    dutyText: { fontFamily: "OpenSans-Bold", color: "black", fontSize: 15 }
})

export default styles