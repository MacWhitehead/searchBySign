import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { TextInput } from 'react-native-web'


function SendUsYourSign({ navigation }) {

    return (
        <View>
            <Text > We are constantly working to add to our dictionary.</Text>
            <Text>We would love to help answer your question and get your sign added for future users! </Text>
            <TextInput type="email" id="email" name="email" placeholder='Enter your email'></TextInput>
            <TextInput multiline numberOfLines={4} name="message" placeholder='Record your sign below Include any helpful context!'></TextInput>
            <Text >Submit?</Text>
            <Pressable >
                <Text >Yes</Text>
            </Pressable>
            <Pressable >
                <Text >No</Text>
            </Pressable>
            <Text>Record SVG goes here</Text>
        </View>
    )
}

// const styles = StyleSheet.create({

// })
export default SendUsYourSign