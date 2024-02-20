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
        >
            <Image
                source={{ uri: image }}
                style={{ width: '100%', aspectRatio: 1, marginBottom: 10 }}
                resizeMode="contain"
            />
            <View className='ml-4'>
                <Text
                    style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10}}
                >
                    {name}
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 10}}>
                    {description}
                </Text>
            </View>
            <View className='bg-red-950 w-full p-4'>
                {Object.entries(stats).map(([key, value]) => (
                    <Text
                        key={key}
                        style={{ fontSize: 16}}
                        className='pb-2 text-white font-semibold'
                    >
                        Stats: {`${key}: ${value}`}
                    </Text>
                ))}
            </View>
        </View>
    );
}
