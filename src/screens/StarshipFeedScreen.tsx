import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import SpaceShipCard from '@/components/SpaceShipCard';
import { useStarships } from '@/hooks/useSpaceships';
import { StatusBar } from 'expo-status-bar';

export const StarshipFeedScreen = () => {
    const { data, isLoading, isError, error } = useStarships();

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && data && (
                <View className="w-full justify-center items-center mt-4">
                    <FlatList
                        data={data.results}
                        ItemSeparatorComponent={({ highlighted }) => (
                            <View className="bg-transparent h-4" />
                        )}
                        renderItem={({
                            item,
                            index,
                            separators: { highlight, unhighlight },
                        }) => {
                            return <SpaceShipCard {...item} />;
                        }}
                    />
                </View>
            )}
            {isError && <Text>{error.message}</Text>}
        </SafeAreaView>
    );
};
