import React from 'react'
import { useAuthContext } from '@/context/AuthContext';
import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';


export default function Navigator() {
        const { isSignedIn } = useAuthContext();

        if (!isSignedIn) {
            return <AuthNavigator />
        }

        return <RootNavigator />
}
