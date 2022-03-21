import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { ActivityIndicator } from 'react-native-web'

function Loading() {

    return (
        <>
        <View style={styles.container}>
            {/* note: need to adjust spinner if possible */}
          <ActivityIndicator styles={styles.spinner} color="#00ff00" />
          <Text>Loading Results...</Text>
      </View>
      </>
    )
  }


  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#edf4fa",
        height: "100%",
        textAlign: 'center', 
        justifyContent: "center",
    }, 
    header: {
        color: "white", 
        fontSize: "18px", 
        marginBottom: "250px"
    },
})

  export default Loading