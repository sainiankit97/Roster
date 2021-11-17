import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native";
import { faArrowLeft, faBriefcase, faCalendarTimes, faPaste, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import meta from "../../meta";
import styles from "./styles";

const DutyDetails = ({
    route,
    navigation
}) => {
    const dutyData = route.params
    const instructions = meta[`${dutyData.DutyID}_Instructions`].split('|');
    const renderInstruction = (instruction, index) => {
        return (
            <Text key={index} style={styles.instruction}>{instruction}</Text>
        )
    }
    const iconToDisplay = () => {
        switch (dutyData.DutyID) {
            case "DO":
                return <FontAwesomeIcon icon={faCalendarTimes} size={25} />;
            case "OFD":
                return <FontAwesomeIcon icon={faBriefcase} size={25} />;
            case "SBY":
                return <FontAwesomeIcon icon={faPaste} size={25} />;
            default:
                return null
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                    {iconToDisplay()}
                    <Text style={styles.dutyType}>{meta[`${dutyData.DutyID}_DutyText`]}</Text>
                </View>
            </View>
            <View style={styles.informationContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faQuestionCircle} size={15} />
                    <Text style={styles.informationText}>{meta.informationText}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    {instructions.map((instruction, index) => {
                        return renderInstruction(instruction, index)
                    })}
                </View>
            </View>
        </View >
    )
}

export default DutyDetails;