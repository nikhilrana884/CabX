import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import { createStackNavigator } from '@react-navigation/stack';
import NavCard from '../components/NavCard'
import RideCard from '../components/RideCard'


const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
          name="NavCard" 
          component={NavCard}
          options={{  
            headerShown: false,
          }}
           />
           <Stack.Screen 
          name="RideCard" 
          component={RideCard}
          options={{  
            headerShown: false,
          }}
           />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})