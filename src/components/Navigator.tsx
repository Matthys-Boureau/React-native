import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { StarshipFeedScreen } from '../screens/StarshipFeedScreen';
import { EldenRingScreen } from '@/screens/EldenRingScreen';
import ClassDetailsScreen from '@/screens/ClassDetailsScreen';
import Accueil from '@/screens/LoggedScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                    name="StarshipFeed"
                    component={StarshipFeedScreen}
                />
                <Stack.Screen name="EldenRing" component={EldenRingScreen} />
                <Stack.Screen name="Accueil" component={Accueil} />
                <Stack.Screen name="Terms" component={TermsScreen} />

                {/* Ajoute une route dynamique pour chaque nom de classe */}
                {/* Le nom de la route est défini comme props.name */}
                <Stack.Screen
                    name="ClassDetails"
                    component={ClassDetailsScreen}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
