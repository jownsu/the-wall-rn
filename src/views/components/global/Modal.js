/* REACT */
import React from "react";
import { View, Modal as RNModal, StyleSheet, TouchableOpacity } from "react-native";

/* CONSTANTS */
import { COLORS } from "../../../constants";

export const Modal = (props) => {
    const { children, visible, onRequestClose, style } = props;

    return (
        <RNModal
            animationType="fade"
            transparent
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <TouchableOpacity 
                activeOpacity={1} 
                style={styles.overlay} 
                onPress={onRequestClose}
            >
                <View 
                    style={[styles.modal_container, style]}
                    onStartShouldSetResponder={() => true}
                >
                    {children}
                </View>
            </TouchableOpacity>
        </RNModal>
  )
}

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, .4)",
        justifyContent: "center",
        alignItems: "center"
    },
    modal_container: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.black,
        width: "95%",
        borderRadius: 10,
        elevation: 5
    }
});