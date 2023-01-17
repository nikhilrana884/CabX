import {  FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: "1",
        title: "Book your ride",
        image: "https://image.shutterstock.com/image-vector/taxi-icon-vector-design-260nw-579950239.jpg",
        screen: "MapScreen",

    },
    {
        id: "2",
        title: "Dine In / Order Food",
        image: "https://i.pinimg.com/originals/94/ee/2f/94ee2fda4931c26b3c55ed23d28e885e.png",
        screen: "EatScreen",
    }
]

const NavBar = () => {
  return (   
    <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}        
        renderItem={({item}) => (
            <TouchableOpacity
                style={tw `bg-blue-200 p-2 pl-5 pb-6 pt-4 m-3 w-50`}
            >
                <View>
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

                    
                </View>
            </TouchableOpacity>
        )}

    />
   );
};

export default NavBar
