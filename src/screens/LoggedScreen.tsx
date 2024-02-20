import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
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
                        className="items-center justify-center bg-slate-300 rounded-lg"
                    >
                        <Text className="font-bold text-black text-2xl">
                            Starship
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ height: 60 }}
                        onPress={navigateToEldenRing}
                        className="items-center justify-center bg-orange-800 rounded-lg"
                    >
                        <Text className="font-bold text-black text-2xl">
                            Elden Ring
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
