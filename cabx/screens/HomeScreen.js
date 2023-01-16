import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-cyan h-full`}>
        <View style={tw `p-4`}>
            <Image 
            style={{
                height: 100,
                width: 100,
                resizeMode: "contain",
            }}
            source={{
                uri: "https://as1.ftcdn.net/v2/jpg/04/18/01/54/1000_F_418015405_gym5TXugGl1D90UTf9wmb86n9JuddmkA.jpg",
            }}
            />
        <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})