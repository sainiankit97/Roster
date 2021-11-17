import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    headerContainer: {
        height: "7%",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    timingText: {
        fontFamily: "OpenSans-Regular",
        color: "red",
        fontSize: 15,
        alignSelf: "flex-end",
        marginBottom: 5,
        textAlign: "right"
    },
    departure: {
        fontFamily: "OpenSans-Regular",
        color: "grey",
        fontSize: 15,
        marginTop: 4
    },
    dutyContainer: {
        borderBottomWidth: 1,
        borderColor: "rgb(209,209,209)",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    dutyText: {
        fontFamily: "OpenSans-Bold",
        color: "black",
        fontSize: 15
    },
    scheduleText: {
        color: "black",
        fontSize: 25,
        fontFamily: "OpenSans-Bold",
        marginLeft: 20
    },
    dayDateContainer: {
        backgroundColor: "rgb(237,237,237)",
        flexDirection: "row",
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: "rgb(209,209,209)"
    },
    dayDateText: {
        fontSize: 17,
        fontFamily: "OpenSans-Bold",
        color: "black",
        marginLeft: 15
    }
})

export default styles;