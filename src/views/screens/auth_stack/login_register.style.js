import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

export const styles = StyleSheet.create({
    login_container: {
        marginHorizontal: 20,
        elevation: 5,
        shadowColor: COLORS.black,
        backgroundColor: COLORS.white,
        borderRadius: 6,
        padding: 25
    },
    input_label: {
        marginBottom: 5
    },
    text_input: {
        height: 55,
        backgroundColor: COLORS.primary_light,
        paddingHorizontal: 10,
        fontFamily: FONTS.Poppins.medium,
        marginBottom: 5
    },
    input_error: {
        backgroundColor: COLORS.red_light
    },
    forgot_password: {
        position: "absolute",
        top: 0,
        right: 0
    },
    signup_container: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        marginTop: 20
    }
});