import React from 'react'
import { View, Text, StyleSheet,ImageBackground } from 'react-native'

const backgroundImagePath = require('../../assets/backgroundImage.jpeg')

const BackgroundLayout = ({children}) => {
  return (
    <ImageBackground source={backgroundImagePath} style={styles.container}>
        {children}
    </ImageBackground>
  )
}


const styles  = StyleSheet.create({
    container: {
        flex: 1,    
    },
    text: {
    },
})

export default BackgroundLayout

