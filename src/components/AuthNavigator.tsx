import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';

export default function AuthNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Group>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}