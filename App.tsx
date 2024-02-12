import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NetworkProvider } from 'react-native-offline';
import { ScreenContainer } from '@/components/ScreenContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from '@/components/Navigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <NetworkProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <Navigator />
                </QueryClientProvider>
            </NetworkProvider>
        </SafeAreaProvider>
    );
}

// export { default } from "./.storybook";
