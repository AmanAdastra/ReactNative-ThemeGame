import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Layout from "../components/Layout/BackgroundLayout";
import PrimaryButton from '../components/Buttons/PrimaryButton'

const PlayGameScreen = ({navigation}) => {
  return (
    <Layout>
        <View style={styles.container}>
            <PrimaryButton buttonText="EndGame" onPress={()=>navigation.navigate("End")} ></PrimaryButton>
        </View>
    </Layout>
  )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },

})

export default PlayGameScreen