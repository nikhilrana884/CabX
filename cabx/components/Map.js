import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{    
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
        }}
    >
        {origin?.location && (
            <Marker
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"
            />
        )}

    </MapView>
    

  )
}

export default Map

const styles = StyleSheet.create({})