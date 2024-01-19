/* REACT */
import { useRef, useState } from "react";
import { StyleSheet, Image, View, TextInput } from "react-native"

/* PLUGINS */
import { AntDesign } from "@expo/vector-icons";

/* CONSTANTS */
import { COLORS } from "../../../constants";

export const WritePost = (props) => {

    const { 
        placeholder = "",
        handlePost = () => {}
    } = props;

    const post_input_ref = useRef(null);
    const [is_focused, setIsFocused] = useState(false);
    const [content, setContent] = useState("");

    onPost = () => {
        handlePost(content);
        setContent("");
        post_input_ref.current.blur();
        setIsFocused(false);
    }

    return (
        <View style={styles.write_post_container}>
        <Image 
            style={styles.user_icon}
            source={require("../../../../assets/icons/user.png")}
        />
        <TextInput 
            ref={post_input_ref}
            style={[styles.post_input, is_focused ? styles.focused_input : {}]}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            placeholder={placeholder}
            value={content}
            onChangeText={content => setContent(content)}
            multiline
        />

        {
            is_focused && content.trim() &&
                <AntDesign 
                    name="enter" 
                    size={24} 
                    color={COLORS.primary} 
                    style={styles.enter_icon}
                    onPress={onPost}
                />
        }
    </View>
  )
}

const styles = StyleSheet.create({
    user_icon: {
        height: 50,
        width: 50,
        borderRadius: 50,
        objectFit: "fill"
    },
    write_post_container: {
        flexDirection: "row",
        backgroundColor: "#f3f3f3",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        position: "relative"
    },
    post_input: {
        borderWidth: 1,
        borderColor: COLORS.grey,
        flex: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 40
    },
    focused_input: { 
        borderColor: COLORS.primary,
        borderWidth: 2
    },
    enter_icon: {
        position: "absolute",
        bottom: 20,
        right: 20
    }
});
