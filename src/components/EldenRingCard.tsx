import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
    image: string;
    name: string;
    description: string;
};

export default function EldenRingCard(props: Props) {
    const navigation = useNavigation();

    return (
        <View className="mx-2 border-2 border-yellow-700 bg-yellow-900/25 rounded-md">
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('ClassDetails', {
                        name: props.name,
                        description: props.description,
                        image: props.image,
                        stats: props.stats,
                    })
                }
            >
                <Image
                    source={{ uri: props.image }}
                    className="rounded-t-md w-full"
                    style={{ aspectRatio: 1 / 1 }}
                    resizeMode="contain"
                />
                <View className="p-4">
                    <Text className="text-black mb-2">{props.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
