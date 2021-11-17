import { pathOr } from "ramda";
import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlane, faBriefcase, faCalendarTimes, faPaste, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fetchDutiesFromServer } from '../../Effects';
import meta from "../../meta";
import styles from "./styles";

const DutiesList = ({
    dutiesByDate,
    navigation,
    fetchDutiesFromServer
}) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        if (fetchDutiesFromServer()) {
            setRefreshing(false)
        }
    }, []);
    
    const renderDuty = (data) => {
        switch (data.DutyID) {
            case "FLT":
                return (
                    <TouchableOpacity key={data.id} style={styles.dutyContainer} onPress={() => navigation.navigate("FlightDetails", data)}>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faPlane} size={35} transform={{ rotate: 318 }} />
                                <Text style={{ fontFamily: "OpenSans-Bold", color: "black", fontSize: 16, marginLeft: 10 }}>{`${data.Departure}-${data.Destination}`}</Text>
                            </View>
                            <Text style={styles.timingText}>{`${data.Time_Depart}-${data.Time_Arrive}`}</Text>
                        </View>
                    </TouchableOpacity>
                )
            case "OFD":
                return (
                    <TouchableOpacity key={data.id} style={styles.dutyContainer} onPress={() => navigation.navigate("DutyDetails", data)}>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faBriefcase} size={35} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.dutyText}>{meta[`${data.DutyID}_DutyText`]}</Text>
                                    <Text style={styles.departure}>{data.Departure}</Text>
                                </View>
                            </View>
                            <Text style={styles.timingText}>{`${data.Time_Depart}-${data.Time_Arrive}`}</Text>
                        </View>
                    </TouchableOpacity>
                )
            case "SBY":
                return (
                    <TouchableOpacity key={data.id} style={styles.dutyContainer} onPress={() => navigation.navigate("DutyDetails", data)}>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faPaste} size={35} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.dutyText}>{meta[`${data.DutyID}_DutyText`]}</Text>
                                    <Text style={styles.departure}>{`SBY(${data.Departure})`}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "OpenSans-Regular", color: "grey", fontSize: 15, textAlign: "right" }}>{meta.matchCrewText}</Text>
                                <Text style={styles.timingText}>{`${data.Time_Depart}-${data.Time_Arrive}`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            case "DO":
                return (
                    <TouchableOpacity key={data.id} style={styles.dutyContainer} onPress={() => navigation.navigate("DutyDetails", data)}>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faCalendarTimes} size={35} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.dutyText}>{meta[`${data.DutyID}_DutyText`]}</Text>
                                    <Text style={styles.departure}>{data.Departure}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "OpenSans-Regular", color: "grey", fontSize: 15, textAlign: "right" }}>{meta.takeRestText}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            default:
                return null
        }

    }
    const renderDutiesByDate = (date) => {
        const data = dutiesByDate[date]
        const renderDayDuties = () => {
            return (
                <View>{data.map((duty) => { return renderDuty(duty) })}</View>
            )
        }
        return (
            <View style={{ flex: 1 }} key={date}>
                <View style={styles.dayDateContainer}>
                    <Text style={styles.dayDateText}>{data[0].day}</Text>
                    <Text style={styles.dayDateText}>{data[0].dateInwords}</Text>
                </View>
                {renderDayDuties()}
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} />
                </TouchableOpacity>
                <Text style={styles.scheduleText}>{meta.scheduleText}</Text>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
            >
                {
                    Object.keys(dutiesByDate).map((date) => {
                        return renderDutiesByDate(date)
                    })
                }
            </ScrollView>
        </View >
    )
}

const mapStateToProps = state => {
    return {
        dutiesByDate: pathOr({}, ["Duties", "dutyList"], state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchDutiesFromServer: () => dispatch(fetchDutiesFromServer())
})

export default connect(mapStateToProps, mapDispatchToProps)(DutiesList);