/**
 *  Installation React Navigaion - Navigators - NativeStack
 *    npm install @react-navigation/native-stack
 *  
 * Installation React Navigaion - Navigators - Drawer
 *    npm install @react-navigation/drawer
*/

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
            />
        </AuthStack.Navigator>
    );
}


export default AuthRoutes;