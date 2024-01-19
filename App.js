/* PLUGINS */
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"
import { Provider } from "react-redux";

/* CONSTANTS */
import { FONTS } from "./src/constants";

/* REDUX */
import { store } from "./src/app/store";

/* COMPONENTS */
import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {

    let [fonts_loaded] = useFonts({
        [FONTS.Poppins.light]     : require("./assets/fonts/Poppins-Light.ttf"),
        [FONTS.Poppins.medium]    : require("./assets/fonts/Poppins-Medium.ttf"),
        [FONTS.Poppins.semi_bold] : require("./assets/fonts/Poppins-SemiBold.ttf"),
        [FONTS.Poppins.bold]      : require("./assets/fonts/Poppins-Bold.ttf")
    });

    if(fonts_loaded){
        SplashScreen.hideAsync();
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}