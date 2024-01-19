/* REACT */
import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

/* PLUGINS */
import { useController } from "react-hook-form";

/* CONSTANTS */
import { COLORS } from "../../../constants";

export const Input = (props) => {
    const { name, control, rules, error = false } = props;
    const { field } = useController({
        control,
        defaultValue: "",
        name,
        rules
    });
    const [is_focused, setIsFocused] = useState(false);

    return (
        <TextInput 
            {...props}
            style={[
                props.style, 
                is_focused && (error ? styles.error_focused : styles.focused)
            ]}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            value={field.value}
            onChangeText={field.onChange}
            selectionColor={error ? COLORS.red : COLORS.primary}
            autoCapitalize="none"
        />
    )
}

const styles = StyleSheet.create({
    focused: {
        borderBottomWidth: 2,
        borderColor: COLORS.primary
    },
    error_focused: {
        borderBottomWidth: 2,
        borderColor: COLORS.red
    }
});