import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavBar from '../components/NavBar'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
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

        <GooglePlacesAutocomplete
            placeholder='From'
            styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    fontSize: 15,
                },
            }}
            onPress={(data, details = null) => {
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                }))
                dispatch(setDestination(null))
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={1}


            query={{    
                key: GOOGLE_MAPS_KEY,
                language: 'en',
            }}

            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            
            />
        <NavBar/>
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