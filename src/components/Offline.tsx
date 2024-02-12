import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useIsConnected } from 'react-native-offline';

export const Offline = () => {
    const isConnected = useIsConnected();

    if (isConnected === null) return null;
    if (isConnected) return null;

    return (
        <View className="absolute top-[58px] z-10 justify-center items-center w-full px-4">
            <View className="bg-red-400 w-full p-4 rounded-lg">
                <View className="flex-row justify-between items-center">
                    <Text className="font-bold">
                        You are currently offline.
                    </Text>
                    <ActivityIndicator color={'black'} />
                </View>
            </View>
        </View>
    );
};
