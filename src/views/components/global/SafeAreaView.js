/* REACT */
import { Dimensions } from "react-native";

/* PLUGINS */
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

/* CONSTANTS */
import { COLORS } from "../../../constants";

const height = Dimensions.get("window").height;

export const SafeAreaView = (props) => {
    const { children, flex, statusBarColor = "rgba(0, 0, 0, 0)", style, center } = props;
    const flex_style = flex ? { flex: 1 } : {};
    const custom_styles = {
        backgroundColor: COLORS.bg_white, 
        justifyContent: center ? "center" : "initial",
        ...style
    };

    return (
        <RNSafeAreaView style={{ height: height, ...flex_style, ...custom_styles }}>
            <StatusBar backgroundColor={statusBarColor} />
            {children}
        </RNSafeAreaView>
    )
}
