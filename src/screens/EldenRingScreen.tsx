import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EldenRingCard from '@/components/EldenRingCard';
import { useEldenRingClass } from '@/hooks/useEldenRingClass';
import { useState, useEffect } from 'react';
import RandomClass from '@/feature/RandomClass';

export const EldenRingScreen = () => {
    const [classData, setClassData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await useEldenRingClass();
            setClassData(data);
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <View>
                <RandomClass />
            </View>
            {classData && (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 4,
                    }}
                >
                    <FlatList
                        style={{ flex: 1 }} // Ajoute cette ligne pour donner une hauteur à la FlatList
                        data={classData}
                        ItemSeparatorComponent={({ highlighted }) => (
                            <View
                                style={{
                                    backgroundColor: 'grey',
                                    height: 24,
                                }}
                            />
                        )}
                        renderItem={({
                            item,
                            index,
                            separators: { highlight, unhighlight },
                        }) => {
                            return <EldenRingCard {...item} />;
                        }}
                    />
                </View>
            )}
            {/* {isError && <Text>{error.message}</Text>} */}
        </SafeAreaView>
    );
};
