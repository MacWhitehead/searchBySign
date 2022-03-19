import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { Button, TextInput } from 'react-native-web'

const Help = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>How can we help?</Text>
            <View>
                <Text style={styles.sendUsHeader}>Send us a message</Text>
                <TextInput style={styles.email}  type="email" id="email" name="email" placeholder='Enter your email'></TextInput>
                <TextInput multiline numberOfLines={4} style={styles.messageInput} name="message" placeholder='Type your message or questions here!'></TextInput>
                <Pressable style={styles.submitMessage}>
                    <Text style={{color: "white", fontSize: "20px"}}>Submit</Text>
                </Pressable>
            </View>

            <View>
                <Text style={styles.resultHeader}>No results for your sign search?</Text>
                <Pressable style={styles.sendSign}>
                    <Text style={{color: "white", fontSize: "24px"}}>Send us your sign</Text>
                </Pressable>
            </View>
            <Pressable style={styles.aboutUs}>
                <Text style={styles.aboutUsText}>About Us</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edf4fa',
        textAlign: 'center',
        height: "100%"
    },
    header: {
        paddingTop: "40px",
        paddingBottom: "10px",
        color: "#234d79",
        fontWeight: '900',
        fontSize: "30px"
    }, 
    sendUsHeader: {
        margin: "auto",
        backgroundColor: "#234d79",
        color: "white",
        fontSize: "16px", 
        padding: "8px",
        borderRadius: 8,
        width: "80%",
    },
    email: {
        width: "80%", 
        margin: "auto",
        backgroundColor: "#edf4fa", 
        color: "#5e7680", 
        fontSize: "14px"
    },
    messageInput: {
        width: "80%",
        margin: "auto",
        backgroundColor: "#ffffff",
        paddingBottom: "40px", 
        borderRadius: 4, 
        color: "#b3b3b5"    
    },
    submitMessage: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 32,
        margin: "auto",
        borderRadius:20,
        elevation: 3,
        width: "40%",
        backgroundColor: '#90bcc9',
    },
    resultHeader: {
        paddingTop: "30px", 
        paddingBottom: "20px",
        fontSize: "17px",
        color: "#5c6e70",
    }, 
    sendSign: {
        backgroundColor: "#8dc483",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        margin: "auto",
        borderRadius: 20,
        elevation: 3,
        width: "70%",

    }, 
    aboutUs: {
        marginTop: 20,
    }, 
    aboutUsText: {
        color: "#234d79",
        fontSize: "28px",
    }
})
export default Help