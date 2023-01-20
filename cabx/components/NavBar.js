import {  FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "1",
        title: "Book your ride",
        image: "https://image.shutterstock.com/image-vector/taxi-icon-vector-design-260nw-579950239.jpg",
        screen: "MapScreen",

    },
    {
        id: "2",
        title: "Order Food",
        image: "https://i.pinimg.com/originals/94/ee/2f/94ee2fda4931c26b3c55ed23d28e885e.png",
        screen: "EatScreen",
    }
]

const NavBar = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (   
    <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}        
        renderItem={({item}) => (
            <TouchableOpacity
              
                onPress={() => navigation.navigate(item.screen)}
                style={tw `bg-blue-200 p-2 pl-5 pb-6 pt-4 m-3 w-50`}
                
                //disabled={!origin}
            >
                <View 
                style={tw`${!origin && "opacity-15"}`}
                >
                    <Image 
                    style={{
                        height: 120,
                        width: 120,
                        resizeMode: "contain",
                    }}
                    source={
                        {uri: item.image}
                    }/>
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-5`}
                    name="arrowright" 
                    color="white"
                    type="antdesign"

                    />
                    
                </View>
            </TouchableOpacity>
        )}

    />
   );
};

export default NavBar
