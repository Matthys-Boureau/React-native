import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Accueil() {
    const navigation = useNavigation();

    function navigateToStarship() {
        navigation.navigate('StarshipFeed');
    }
    function navigateToEldenRing() {
        navigation.navigate('EldenRing');
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <View className="p-12">
                <View className="flex flex-col gap-12">
                    <TouchableOpacity
                        style={{ height: 60 }}
                        onPress={navigateToStarship}
                        className="flex flex-row gap-x-2 items-center justify-center bg-slate-300 rounded-lg"
                    >
                        <Icon name='rocket' />
                        <Text className="font-bold text-black text-2xl">
                            Starship
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ height: 60 }}
                        onPress={navigateToEldenRing}
                        className="flex flex-row gap-x-2 items-center justify-center bg-amber-500 rounded-lg"
                    >
                        <Icon name='view-headline' />
                        <Text className="font-bold text-black text-2xl">
                            Elden Ring
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
