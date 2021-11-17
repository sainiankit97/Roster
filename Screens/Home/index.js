import React, { useCallback, useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image,
    ScrollView,
    RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import { fetchDutiesFromServer } from '../../Effects';
import { findAcronym } from '../../utils';
import { faBriefcase, faCalendarAlt, faCalendarTimes, faPaste, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { pathOr } from 'ramda';
import meta from '../../meta';
import styles from './styles';

const Home = ({
    fetchDutiesFromServer,
    dutiesByDate,
    navigation
}) => {
    const [refreshing, setRefreshing] = useState(false);
    const today = new Date();
    const todayDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

    useEffect(() => {
        fetchDutiesFromServer()
    }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        if (fetchDutiesFromServer()) {
            setRefreshing(false)
        }
    }, []);

    const renderAccordingToDuty = (duty) => {
        switch (duty.DutyID) {
            case "FLT":
                return (
                    <TouchableOpacity key={duty.id} style={styles.dutyContainer} onPress={() => navigation.navigate("FlightDetails", duty)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faPlane} size={35} transform={{ rotate: 318 }} />
                                <Text style={{ fontFamily: "OpenSans-Bold", color: "black", fontSize: 16, marginLeft: 10 }}>{`${duty.Departure}-${duty.Destination}`}</Text>
                            </View>
                            <Text style={styles.timingText}>{`${duty.Time_Depart}-${duty.Time_Arrive}`}</Text>
                        </View>
                    </TouchableOpacity>
                )
            case "OFD":
                return (
                    <TouchableOpacity key={duty.id} style={styles.dutyContainer} onPress={() => navigation.navigate("DutyDetails", duty)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faBriefcase} size={35} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.dutyText}>{meta[`${duty.DutyID}_DutyText`]}</Text>
                                    <Text style={styles.destinationText}>{duty.Departure}</Text>
                                </View>
                            </View>
                            <Text style={styles.timingText}>{`${duty.Time_Depart}-${duty.Time_Arrive}`}</Text>
                        </View>
                    </TouchableOpacity>
                )
            case "SBY":
                return (
                    <TouchableOpacity key={duty.id} style={styles.dutyContainer} onPress={() => navigation.navigate("DutyDetails", duty)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faPaste} size={35} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.dutyText}>{meta[`${duty.DutyID}_DutyText`]}</Text>
                                    <Text style={styles.destinationText}>{`SBY(${duty.Departure})`}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.extraText}>Match Crew</Text>
                                <Text style={styles.timingText}>{`${duty.Time_Depart}-${duty.Time_Arrive}`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            case "DO":
                return (
                    <TouchableOpacity key={duty.id} style={styles.dutyContainer} onPress={() => navigation.navigate("DutyDetails", duty)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faCalendarTimes} size={35} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.dutyText}>{meta[`${duty.DutyID}_DutyText`]}</Text>
                                    <Text style={styles.destinationText}>{duty.Departure}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.extraText}>Take Rest</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            default:
                return null
        }
    }
    const renderTodayDuty = () => {
        const todayDuty = dutiesByDate[todayDate]
        if (todayDuty === undefined) {
            return (
                <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
                    <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 15 }}>You have no duty for Today</Text>
                </View>
            )
        }
        return (
            <View style={{ paddingHorizontal: 30, flex: 1 }}>
                {todayDuty.map((duty) => {
                    return renderAccordingToDuty(duty)
                })}
            </View>
        )
    }
    return (
        <ScrollView contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.welcomeText}>Welcome Ankit</Text>
                <TouchableOpacity onPress={() => navigation.navigate("DutiesList")} style={{ marginRight: 20 }}>
                    <FontAwesomeIcon icon={faCalendarAlt} size={25} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.profileContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.acronymContainer}>
                            <Text style={styles.acronym}>{findAcronym("Ankit Saini")}</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.name}>Ankit Saini</Text>
                            <Text style={styles.designation}>First Caption at Indigo Airlines</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ backgroundColor: "rgb(209,209,209)", marginHorizontal: 20, paddingVertical: 10 }}>
                    <Text style={{ marginLeft: 20, fontFamily: "OpenSans-Bold" }}>Today</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                {renderTodayDuty()}
            </View>
        </ScrollView>
    )
}


const mapDispatchToProps = (dispatch) => ({
    fetchDutiesFromServer: () => dispatch(fetchDutiesFromServer())
})

const mapStateToProps = state => {
    return {
        dutiesByDate: pathOr([], ["Duties", "dutyList"], state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);