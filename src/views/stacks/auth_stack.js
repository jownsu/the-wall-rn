/* PLUGINS */
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/* SCREENS */
import LoginScreen from "../screens/auth_stack/login_screen";
import RegisterScreen from "../screens/auth_stack/register_screen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthStack