import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { StarshipFeedScreen } from '../screens/StarshipFeedScreen';
import { EldenRingScreen } from '@/screens/EldenRingScreen';
import ClassDetailsScreen from '@/screens/ClassDetailsScreen';
import Homepage from '@/screens/LoggedScreen';
import { StarshipDetails } from '@/screens/StarshipDetailsScreen';

export default function RootNavigator() {

const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Homepage">
                <Stack.Screen name="Terms" component={TermsScreen} />

                <Stack.Screen name="Homepage" component={Homepage} />

                <Stack.Screen
                    name="StarshipFeed"
                    component={StarshipFeedScreen}
                />

                <Stack.Group  screenOptions={{ headerShown: false, presentation: 'modal' }}>
                    <Stack.Screen
                        name="StarshipDetails"
                        component={StarshipDetails}
                    />
                </Stack.Group>

                <Stack.Screen name="EldenRing" component={EldenRingScreen} />
                <Stack.Screen
                    name="ClassDetails"
                    component={ClassDetailsScreen}
                    options={({ route }) => ({ title: route.params.name })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}