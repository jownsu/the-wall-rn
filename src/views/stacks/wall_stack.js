/* PLUGINS */
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/* SCREENS */
import WallScreen from "../screens/wall_stack/wall_screen";
import CommentScreen from "../screens/wall_stack/comment_screen";

const Stack = createNativeStackNavigator();

const WallStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WallScreen"
                component={WallScreen}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="CommentScreen"
                component={CommentScreen}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default WallStack;