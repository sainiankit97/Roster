import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlaneDeparture, faPlaneArrival, faArrowLeft, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { findAcronym } from "../../utils";
import meta from "../../meta";
import styles from "./styles";

const FlightDetails = ({
    route,
    navigation
}) => {
    const [viewToRender, setViewToRender] = useState("flightDetails");
    const flightData = route.params
    let crewDetails = [];
    if (flightData.Captain !== "") {
        crewDetails.push({
            name: flightData.Captain,
            designation: "Captain at Indigo Airlines",
            id: 1
        })
    }
    if (flightData['First Officer']) {
        crewDetails.push({
            name: flightData['First Officer'],
            designation: "First Officer at Indigo Airlines",
            id: 2
        })
    }
    if (flightData['Flight Attendant']) {
        crewDetails.push({
            name: flightData['Flight Attendant'],
            designation: "Flight Attendant at Indigo Airlines",
            id: 3
        })
    }
    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 30 }}>
                    <FontAwesomeIcon icon={faPlaneDeparture} size={25} />
                    <Text style={{ color: "black", fontSize: 20, fontFamily: "OpenSans-Regular", marginHorizontal: 20 }}>{`${flightData.Departure}-${flightData.Destination}`}</Text>
                    <FontAwesomeIcon icon={faPlaneArrival} size={25} />
                </View>
            </View>
        )
    }
    const renderFlightInfo = () => {
        return (
            <View style={{ marginTop: 5 }}>
                {flightData.Date ?
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{flightData.Date}</Text>
                    </View> : null
                }
                <View style={styles.flightDataContainer}>
                    <Text style={styles.flightPNR}>{flightData.Flightnr}</Text>
                    <Text style={styles.aircraftType}>{flightData['Aircraft Type']}</Text>
                </View>
                <View style={styles.detailViewContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesomeIcon icon={faPlaneDeparture} size={40} />
                        <Text style={styles.placenameText}>{flightData.Departure}</Text>
                    </View>
                    <Text style={styles.timingText}>{flightData.Time_Depart}</Text>
                </View>
                <View style={styles.detailViewContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesomeIcon icon={faPlaneArrival} size={40} />
                        <Text style={styles.placenameText}>{flightData.Destination}</Text>
                    </View>
                    <Text style={styles.timingText}>{flightData.Time_Arrive}</Text>
                </View>
            </View>
        )
    }
    const renderCrewinfo = () => {
        return (
            <View>
                {
                    crewDetails.map((detail) => {
                        return (
                            <View key={detail.id} style={styles.profileContainer}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.acronymContainer}>
                                        <Text style={styles.acronym}>{findAcronym(detail.name)}</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.name}>{detail.name}</Text>
                                        <Text style={styles.designation}>{detail.designation}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.viewContainer}>
                                    <Text style={styles.viewText}>{meta.viewButtonText}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                {
                    crewDetails.length === 0 ?
                        <View style={styles.informationContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size={15} />
                                <Text style={styles.informationHeader}>{meta.informationText}</Text>
                            </View>
                            <Text style={styles.informationHeader}>{meta.noCrewInformationText}</Text>
                        </View> : null
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.flightInfoTextContainer(viewToRender)} onPress={() => { setViewToRender("flightDetails") }}>
                    <Text style={styles.flightInfoText(viewToRender)}>{meta.flightInfo}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.crewInfoTextContainer(viewToRender)} onPress={() => { setViewToRender("crewDetails") }}>
                    <Text style={styles.crewInfoText(viewToRender)}>{meta.crewInfo}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                {viewToRender === "flightDetails" ?
                    renderFlightInfo() :
                    renderCrewinfo()
                }
            </View>
        </View>
    )
}


export default FlightDetails;