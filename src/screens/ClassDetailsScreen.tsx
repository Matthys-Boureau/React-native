import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ClassDetailsScreen({ route }) {
    const { name, description, image, stats } = route.params;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'start',
                paddingLeft: 10,
            }}
        >
            <Image
                source={{ uri: image }}
                style={{ width: '100%', aspectRatio: 1, marginBottom: 10 }}
                resizeMode="contain"
            />
            <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}
            >
                {name}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
                {description}
            </Text>
            {Object.entries(stats).map(([key, value]) => (
                <Text
                    key={key}
                    style={{ fontSize: 16, paddingLeft: 10, paddingTop: 5 }}
                >
                    Stat - {`${key}: ${value}`}
                </Text>
            ))}
        </View>
    );
}
