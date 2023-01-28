import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import Layout from "../components/Layout/BackgroundLayout";

const StartScreen = ({navigation}) => {
  return (
    <Layout>
        <View style={styles.container}>
            <PrimaryButton buttonText="Start" onPress={()=>navigation.navigate("Game")}/>
            <PrimaryButton buttonText="Settings" onPress={()=>navigation.navigate("Settings")}/>
        </View>
    </Layout>
  )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default StartScreen