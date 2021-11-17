import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(209,209,209)"
    },
    instruction: {
        fontFamily: "OpenSans-Regular",
        fontSize: 15,
        color: "black",
        lineHeight: 25
    },
    informationContainer: {
        borderWidth: 1,
        borderColor: "rgb(209,209,209)",
        padding: 15,
        marginTop: 40,
        borderRadius: 5,
        marginHorizontal: 20
    },
    dutyType: {
        fontFamily: "OpenSans-Bold",
        fontSize: 23,
        marginLeft: 10,
        color: "black"
    },
    informationText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 15,
        marginLeft: 10,
        color: "black"
    }
})

export default styles