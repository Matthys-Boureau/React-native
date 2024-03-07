import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import { TermsScreen } from '@/screens/TermsScreen';

export default function AuthNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Group>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Terms" component={TermsScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}