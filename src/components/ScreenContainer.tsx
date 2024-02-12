import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';
import { Offline } from './Offline';

export const ScreenContainer = ({ children }: { children?: ReactNode }) => {
    return (
        <View>
            <Offline />
            {children}
        </View>
    );
};
