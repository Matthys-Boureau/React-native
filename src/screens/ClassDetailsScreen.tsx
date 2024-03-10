import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ClassDetailsScreen({ route }) {
    const { name, description, image, stats } = route.params;

    return (
        <View className='flex bg-white justify-center align-center h-full w-full'>
            <Image
                source={{ uri: image }}
                style={{ aspectRatio: 1, marginBottom: 10, height: 300, width: 'auto' }}
                resizeMode="contain"
            />
            <View className='ml-4'>
                <Text style={{ fontSize: 16, marginBottom: 10}}>
                    {description}
                </Text>
            </View>
            <View className='w-full p-4 flex flex-row flex-wrap'>
                {stats && Object.entries(stats).map(([key, value]) => (
                    <Text
                        key={key}
                        className='pb-2 text-xs font-semibold w-6/12'
                    >
                        {`${key}: ${value}`}
                    </Text>
                ))}
            </View>
        </View>
    );
}
