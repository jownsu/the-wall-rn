/* REACT */
import { View, StyleSheet } from "react-native";

/* COMPONENTS */
import { Text } from "../../../components/global";
import { NoMessage } from "../../../components/icons/icons";

/* CONSTANTS */
import { COLORS } from "../../../../constants";

const EmptyPost = () => {
    return (
        <View style={styles.container}>
            <NoMessage />
            <Text 
                size={14} 
                color={COLORS.grey_dark}
            >
                No Post Yet
            </Text>
        </View>
  )
}

export default EmptyPost;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: "center",
        gap: 10
    }
});