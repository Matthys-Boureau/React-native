import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Homepgage() {
    const navigation = useNavigation();

    function navigateToStarship() {
        navigation.navigate('StarshipFeed');
    }
    function navigateToEldenRing() {
        navigation.navigate('EldenRing');
    }

    return (
            <View className="pt-8 h-full">
                <View>
                    <Text className="font-bold text-black text-4xl pl-6 pb-4">Game List</Text>
                    <ScrollView horizontal className="w-full flex py-4" showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity
                            onPress={navigateToStarship}
                            className="flex flex-row gap-x-6 items-center justify-center bg-slate-300/75 rounded-full pl-2 pr-8 mx-2 h-16"
                        >
                            <Icon name='rocket' />
                            <Text className="font-bold text-black text-2xl">
                                Starship
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={navigateToEldenRing}
                            className="flex flex-row gap-x-6 items-center justify-center bg-amber-500/75 rounded-full pl-2 pr-8 mx-2 h-16"
                        >
                            <Icon name='view-headline' />
                            <Text className="font-bold text-black text-2xl">
                                Elden Ring
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="flex flex-row gap-x-6 items-center justify-center bg-red-600/75 rounded-full pl-2 pr-8 mx-2 h-16"
                        >
                            <Icon name='local-fire-department' />
                            <Text className="font-bold text-black text-2xl">
                                Valorant
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="flex flex-row gap-x-6 items-center justify-center bg-teal-400/75 rounded-full pl-2 pr-8 mx-2 h-16"
                        >
                            <Icon name='directions-car' />
                            <Text className="font-bold text-black text-2xl">
                                Rocket League
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View className='my-6 h-full flex-1 pb-4'>
                    <Text className="font-bold text-black text-4xl pl-6 pb-4 mb-4">News</Text>
                    <ScrollView showsVerticalScrollIndicator={false} className='pl-2 pr-6 flex flex-col gap-4 h-full'>
                        <View className='relative w-full'>
                            <Image source={require('../../assets/elden-ring/elden-ring.jpeg')} className='w-full h-52 rounded-md'/>
                            <Text className='absolute color-white text-2xl font-bold bottom-2 left-4 w-full'>Elden Ring</Text>
                        </View>
                        <View className='relative w-full'>
                            <Image source={require('../../assets/elden-ring/faucon.avif')} className='w-full h-52 rounded-md'/>
                            <Text className='absolute color-white text-2xl font-bold bottom-2 left-4 w-full'>Star Wars</Text>
                        </View>
                        <View className='relative w-full'>
                            <Image source={require('../../assets/elden-ring/dune.webp')} className='w-full h-52 rounded-md'/>
                            <Text className='absolute color-white text-2xl font-bold bottom-2 left-4 w-full'></Text>
                        </View>
                        <View className='relative w-full'>
                            <Image source={require('../../assets/elden-ring/rl.jpeg')} className='w-full h-52 rounded-md'/>
                            <Text className='absolute color-white text-2xl font-bold bottom-2 left-4 w-full'></Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
    );
}
