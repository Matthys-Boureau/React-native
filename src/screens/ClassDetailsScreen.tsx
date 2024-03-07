import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ClassDetailsScreen({ route }) {
    const { name, description, image, stats } = route.params;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'start',
            }}
            className='flex'
        >
            <Image
                source={{ uri: image }}
                style={{ aspectRatio: 1, marginBottom: 10, height: 300 }}
                resizeMode="contain"
            />
            <View className='ml-4'>
                <Text style={{ fontSize: 16, marginBottom: 10}}>
                    {description}
                </Text>
            </View>
            <View className='w-full p-4 grid grid-rows-4 grid-flow-col'>
                {Object.entries(stats).map(([key, value]) => (
                    <Text
                        key={key}
                        className='pb-2 text-xs font-semibold'
                    >
                        {`${key}: ${value}`}
                    </Text>
                ))}
            </View>
        </View>
    );
}
