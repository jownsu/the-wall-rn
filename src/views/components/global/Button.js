/* REACT */
import { Text, TouchableOpacity, StyleSheet } from "react-native"

/* CONSTANTS */
import { COLORS, FONTS } from "../../../constants";

export const Button = (props) => {

    const { 
            title = "", 
            style, 
            textStyle,
            onPress = () => {},
            disabled = false
    } = props;

    return (
        <TouchableOpacity 
            style={[styles.button, style, disabled ? {opacity: .5} : {}]} 
            onPress={onPress}
            activeOpacity={.7}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]} >{title}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        alignSelf: "center"
    },
    text: {
        fontFamily: FONTS.Poppins.medium,
        color: COLORS.white,
        fontSize: 14,
        textAlign: "center"
    }
});
