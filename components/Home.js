import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Home = () => {

    return (
        <View style={styles.container}>
        {/* NOTE: Need to add logo here */}
        <Text style={styles.header}>Tap to record and search your sign!</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#234d79",
        height: "100%",
        textAlign: 'center', 
        justifyContent: "end",
    }, 
    header: {
        color: "white", 
        fontSize: "18px", 
        marginBottom: "250px"
    }
})
export default Home