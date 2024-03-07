import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NetworkProvider } from 'react-native-offline';
import { ScreenContainer } from '@/components/ScreenContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from '@/components/Navigator';
import { useState } from 'react';
import { AuthContextProvider } from '@/context/AuthContext';

export default function App() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <SafeAreaProvider>
            <AuthContextProvider>
                <NetworkProvider>
                    <QueryClientProvider client={new QueryClient()}>
                        <Navigator />   
                    </QueryClientProvider>
                </NetworkProvider>
            </AuthContextProvider>
        </SafeAreaProvider>
    );
}

// export { default } from "./.storybook";
