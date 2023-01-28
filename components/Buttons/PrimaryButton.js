import React from 'react'
import { View, Text, StyleSheet,Pressable } from 'react-native'

const PrimaryButton = ({buttonText, onPress}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={onPress} ><Text style={styles.text}>{buttonText}</Text></Pressable>
    </View>
  )
}

const styles  = StyleSheet.create({
    container: {
        backgroundColor: '#336fdf',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        height: 50,
        width: 200,

    },
    text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
})






export default PrimaryButton