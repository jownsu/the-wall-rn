/* REACT */
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

/* COMPONENT */
import { Text } from "../../../components/global";

/* REDUX */
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth_slice";

/* CONSTANTS */
import { COLORS } from "../../../../constants";

const header = () => {
    const dispatch = useDispatch();
    
    return (
        <View style={styles.header}>
            <Image
                style={styles.wall_icon}
                source={require("../../../../../assets/icons/wall_icon.png")}
                contentFit="cover"
                transition={1000}
            />
            <Text size={18} weight="medium" >The Wall</Text>
            <TouchableOpacity onPress={() => dispatch(logout())} style={{marginLeft: "auto"}}>
                <Text size={16} weight="medium" color={COLORS.primary}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default header;

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
    wall_icon: {
        height: 30,
        width: 30
    }
});