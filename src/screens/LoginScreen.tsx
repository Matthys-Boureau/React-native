import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { useAuthContext } from '@/context/AuthContext';

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    
    const { toggleIsSignedIn } = useAuthContext();

    function navigateToTerms() {
        navigation.navigate('Terms');
    }
    function navigateAccueil() {
        navigation.navigate('Homepage');
    }

    return (
        <View className='bg-gray-200 h-full pt-16'>
            <View className="px-12 gap-4">
                <Text className="text-3xl font-bold">Connexion</Text>
                <KeyboardAvoidingView behavior='padding' className="gap-y-1">
                    <Text className="text-lg font-semibold">Email</Text>
                    <TextInput
                        keyboardType="email-address"
                        className="bg-sky-50 text-xl px-4 py-2 rounded-lg"
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior='padding' className="gap-y-1">
                    <Text className="text-lg font-semibold">Password</Text>
                    <View className="flex-row items-center">
                        <TextInput
                            secureTextEntry={!showPassword}
                            className="bg-sky-50 text-xl px-4 py-2 rounded-l-lg flex-1"
                        />
                        <TouchableOpacity
                            style={{ height: 42 }}
                            onPress={() => setShowPassword((old) => !old)}
                            className="items-center justify-center bg-sky-50  px-4 rounded-r-lg"
                        >
                            <Icon name={showPassword ? "visibility-off" : "visibility"} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <View>
                    <TouchableOpacity
                        style={{ height: 40 }}
                        onPress={() => toggleIsSignedIn()}
                        className="mt-4 items-center justify-center bg-slate-400 rounded-lg"
                    >
                        <Text className="font-bold text-black text-xl">Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={navigateToTerms}>
                        <Text className="text-sm text-slate-500 text-center">
                            By login you accept the terms and conditions
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
