import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Home = () => {

    return (
        <View style={styles.container}>
        {/* NOTE: Need to add logo here */}
        <Text style={styles.header}>Tap to record and search your sign!</Text>
        <Text style={styles.recordSignOuter}></Text>
        <Text style={styles.recordSignInner}></Text>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#234d79",
        height: "100%",
        // textAlign: 'center', 
        // alignItems: "center",
        justifyContent: "end",
    }, 
    header: {
        color: "white", 
        fontSize: "18px", 
        marginBottom: "50px"
    },
    recordSignOuter: {
        position: "relative",
        padding: "45px",
        width: "45px",
        // borderRadius: 150,
        backgroundColor: "#b3cfde",
    }, 
    recordSignInner: {
        position: "relative",
        padding: "40px",
        width: "30px",
        borderRadius: 100,
        backgroundColor: "#fff",
        // marginBottom: "150px"
    }, 
    // recordSignSquare: {
    //     padding: "40px",
    //     width: "30px",
    //     backgroundColor: "#fff",
    //     marginBottom: "150px"
    // }
})
export default Home