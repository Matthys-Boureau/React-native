import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "react-native-paper";

export default {
    title: "Card",
};

export const Default = () => (
    <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
        <Card>
            <Text className="px-4 py-2">Salut</Text>
        </Card>
    </View>
);
