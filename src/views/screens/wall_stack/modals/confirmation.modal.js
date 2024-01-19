/* REACT */
import { View, TouchableOpacity, StyleSheet } from "react-native";

/* COMPONENTS */
import { Button, Modal, Text } from "../../../components/global";

/* CONSTANTS */
import { COLORS, FONTS } from "../../../../constants";

const ConfirmationModal = (props) => {
    const { 
        is_show, 
        onClose, 
        onConfirm,
        title = "",
        message = "",
        confirm_btn_text = "Confirm",
        cancel_btn_text = "Cancel"
    } = props;

    const handleConfirm = () => {
        onConfirm();
        onClose();
    }

    return (
        <Modal
            visible={is_show}
            onRequestClose={onClose}
            style={styles.modal_container}
        >
            <Text 
                size={21} 
                weight="medium" 
                center
            >
                {title}
            </Text>
            <Text
                size={16} 
                weight="light" 
                center
            >
                {message}
            </Text>

            <View style={styles.action_container}>
                <TouchableOpacity
                    style={[styles.cancel_btn, styles.action_btn]}
                    activeOpacity={.7}
                    onPress={onClose}
                >
                    <Text size={14} center>{cancel_btn_text}</Text>
                </TouchableOpacity>

                <Button 
                    title={confirm_btn_text}
                    onPress={handleConfirm}
                    style={styles.action_btn}
                />
            </View>
        </Modal>
  )
}

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, .4)",
    },
    modal_container: {
        padding: 20
    },
    input_message: {
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: COLORS.primary_light,
        padding: 10,
        height: 100,
        marginBottom: 20,
        textAlignVertical: "top",
        fontFamily: FONTS.Poppins.medium
    },
    txt_message: {
        marginBottom: 20
    },
    action_container: {
        marginTop: 20,
        gap: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    action_btn: {
        flex: 1,
        height: 35
    },
    cancel_btn: {
        borderWidth: 1,
        borderColor: COLORS.grey_light,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    }
});

export default ConfirmationModal