/* REACT */
import { Text as RNText } from "react-native";

/* CONSTANTS */
import { COLORS, FONTS } from "../../../constants";

export const Text = ({
    children,
    style,
    weight = "light",
    color,
    center,
    size,
    number_of_lines,
    adjusts_font_size_to_fit,
    flex = false,
}) => {
    let font_color = color ? { color } : { color: COLORS.primary_dark };
    let font_size = size ? { fontSize: size } : { fontSize: 16 };
    let font_center = center ? { textAlign: "center" } : {};
    let flex_style = flex ? { flex: 1 } : {};

    return (
        <RNText
            style={{
                fontFamily: FONTS.Poppins?.[weight] ?? FONTS.Poppins.light,
                ...font_color,
                ...font_size,
                ...font_center,
                ...flex_style,
                ...style
            }}
            numberOfLines={number_of_lines}
            adjustsFontSizeToFit={adjusts_font_size_to_fit}
        >
            {children}
        </RNText>
    )
}

export default Text;
