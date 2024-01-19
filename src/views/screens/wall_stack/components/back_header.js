/* REACT */
import { TouchableOpacity, View, StyleSheet } from "react-native";

/* PLUGINS */
import { Ionicons } from '@expo/vector-icons';

/* COMPONENT */
import { Text } from "../../../components/global";

/* CONSTANTS */
import { COLORS } from "../../../../constants";

const BackHeader = ({onBackPress = () => {}}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity 
                style={styles.back_btn} 
                activeOpacity={.7}
                onPress={onBackPress}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
                <Text size={18} weight="medium">Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BackHeader;

export const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        paddingVertical: 15,
        paddingHorizontal: 25,
        elevation: 5,
        gap: 15,
        marginBottom: 30,
        flexDirection: "row"
    },
    back_btn: {
        flexDirection: "row",
        gap: 5
    }
});