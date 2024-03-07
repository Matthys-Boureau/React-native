import React from 'react';
import { View, Text } from 'react-native';

export const StarshipDetails = ({ route }) => {

    const { name, model, manufacturer, cost_in_credits, hyperdrive_rating } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Name: {name}</Text>
            <Text>Model: {model}</Text>
            <Text>Manufacturer: {manufacturer}</Text>
            <Text>Cost in credits: {cost_in_credits}</Text>
            <Text>Hyperdrive rating: {hyperdrive_rating}</Text>
        </View>
    );
};