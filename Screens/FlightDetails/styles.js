import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    flightInfoTextContainer: viewToRender => ({
        width: "50%",
        height: 40, alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: `${viewToRender === "flightDetails" ? "rgb(33,144,208)" : "white"}`
    }),
    flightInfoText: viewToRender => ({
        color: `${viewToRender === "flightDetails" ? "rgb(33,144,208)" : "black"}`,
        fontSize: 17,
        fontFamily: "OpenSans-Bold"
    }),
    crewInfoTextContainer: viewToRender => ({
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: `${viewToRender === "crewDetails" ? "rgb(33,144,208)" : "white"}`
    }),
    crewInfoText: viewToRender => ({
        color: `${viewToRender === "crewDetails" ? "rgb(33,144,208)" : "black"}`,
        fontSize: 17,
        fontFamily: "OpenSans-Bold"
    }),
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(209,209,209)",
        paddingVertical: 10,
        justifyContent: "space-between"
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
    viewContainer: {
        backgroundColor: "rgb(33,144,208)",
        padding: 5,
        borderRadius: 3
    },
    viewText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 12,
        color: "white"
    },
    informationContainer: {
        borderWidth: 1,
        borderColor: "rgb(209,209,209)",
        padding: 15,
        marginTop: 40,
        borderRadius: 5
    },
    informationHeader: {
        fontFamily: "OpenSans-Regular",
        fontSize: 15,
        marginLeft: 10,
        color: "black"
    },
    informationDescription: {
        fontFamily: "OpenSans-Regular",
        fontSize: 15,
        marginTop: 10,
        color: "black"
    },
    date: {
        fontFamily: "OpenSans-Regular",
        fontSize: 20
    },
    dateContainer: {
        alignItems: "center",
        marginBottom: 10
    },
    flightPNR: {
        fontFamily: "OpenSans-Regular",
        color: "black",
        fontSize: 20,
        marginLeft: 20
    },
    aircraftType: {
        fontFamily: "OpenSans-Regular",
        color: "black",
        fontSize: 20,
        marginRight: 20
    },
    flightDataContainer: {
        backgroundColor: "rgb(209,209,209)",
        elevation: 1,
        height: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    detailViewContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: "space-between"
    },
    placenameText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 20,
        marginLeft: 15
    },
    timingText: {
        fontSize: 20,
        fontFamily: "OpenSans-Regular"
    }
})

export default styles