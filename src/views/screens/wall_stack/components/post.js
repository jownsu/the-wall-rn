/* REACT */
import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

/* REDUX */
import { useSelector } from "react-redux";

/* COMPONENTS */
import { Text, Button } from "../../../components/global";
import { Edit, Trash } from "../../../components/icons/icons";

/* PLUGINS */
import moment from "moment";

/* CONSTANTS */
import { COLORS, FONTS } from "../../../../constants";

const Post = (props) => {

    const {
        post, 
        onDelete, 
        onUpdate, 
        container_style,
        is_comment = false,
        is_single = false,
        onPress = () => {}
    } = props;

    const { current_user } = useSelector(state => state.auth);

    const [is_edit, setIsEdit] = useState(false);
    const [post_content, setPostContent] = useState(post.content);

    const handleUpdatePost = () => {
        onUpdate({id: post.id, content: post_content});
        setIsEdit(false);
    }

    function timeDifference(dateString){
        const provided_Date = moment.utc(dateString);
        const current_date = moment.utc();
    
        const duration = moment.duration(current_date.diff(provided_Date));
        const days_difference = duration.asDays();
        const hours_difference = duration.asHours();
        const minutes_difference = duration.asMinutes();
    
        if(days_difference >= 1){
            return `${Math.floor(days_difference)} days ago`;
        }
        else if(hours_difference >= 1){
            return `${Math.floor(hours_difference)} hours ago`;
        }
        else{
            return `${Math.floor(minutes_difference)} minutes ago`;
        }
    }

    return (
        <TouchableOpacity 
            style={{...styles.post_container, ...container_style}}
            activeOpacity={.7}
            onPress={onPress}
        >
            <View>
                <View style={styles.author_container}>
                    <Image 
                        style={styles.user_icon}
                        source={require("../../../../../assets/icons/user.png")}
                    />
                    <View style={{justifyContent: "center"}}>
                        <Text style={{lineHeight: 20}} size={16} weight="medium">{post.user}</Text>
                        <Text size={12}>{timeDifference(post.created_at)}</Text>
                    </View>
                </View>

                {
                    is_edit 
                    ? <>
                        <View>
                            <TextInput
                                style={styles.post_input}
                                value={post_content}
                                onChangeText={post => setPostContent(post)}
                                autoCapitalize="none"
                                multiline
                            />

                            <View style={styles.post_action_container}>
                                <TouchableOpacity 
                                    activeOpacity={.7}
                                    onPress={() => setIsEdit(false)}
                                >
                                    <Text size={14}>Cancel</Text>
                                </TouchableOpacity>

                                <Button
                                    title="Save Changes"
                                    onPress={handleUpdatePost}
                                    disabled={!post_content.trim()}
                                />
                            </View>
                        </View>
                    </>

                    : <>
                        <Text style={{paddingHorizontal: 10}} >{post.content}</Text>
                        <View style={styles.action_container}>
                            {
                                !is_comment && <>
                                    <Text 
                                        color={is_single ? COLORS.black : COLORS.primary} 
                                        weight="medium" 
                                        size={14}
                                    >
                                        {post.comments?.length} Comments
                                    </Text>
                                </>
                            }
                            {
                                    !is_comment && (current_user.id === post.user_id) &&
                                        <View style={styles.separator}></View>
                            }                            
                            {
                                current_user.id === post.user_id && <>
                                    <TouchableOpacity 
                                        activeOpacity={.7}
                                        onPress={() => {
                                            setPostContent(post.content);
                                            setIsEdit(true);
                                        }}
                                        style={styles.action_btn}
                                    >
                                        <Edit /> 
                                        { is_comment && <Text>Edit</Text>}
                                    </TouchableOpacity>
                                    <View style={styles.separator}></View>
                                    <TouchableOpacity 
                                        activeOpacity={.7}
                                        onPress={onDelete}
                                        style={styles.action_btn}
                                    >
                                        <Trash /> 
                                        { is_comment && <Text>Delete</Text>}
                                    </TouchableOpacity>
                                </>
                            }
                        </View>
                    </>
                }
            </View>
        </TouchableOpacity>
    )
}

export default Post;

const styles = StyleSheet.create({
    post_container: {
        borderWidth: 2,
        borderColor: COLORS.primary_light,
        borderRadius: 6,
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 10
    },
    cancel_btn:{
        marginLeft: "auto"
    },
    action_container:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 10
    },
    author_container: {
        flexDirection: "row"
    },
    post_input:{
        padding: 15,
        backgroundColor: "#F5F8FF",
        fontFamily: FONTS.Poppins.medium,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.primary_light
    },
    post_action_container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 20,
        marginTop: 10
    },
    user_icon: {
        height: 50,
        width: 50,
        borderRadius: 50,
        objectFit: "fill",
    },
    separator: {
        width: 2,
        height: 15,
        backgroundColor: COLORS.grey_dark,
        marginHorizontal: 10
    },
    action_btn: {
        flexDirection: "row",
        gap: 5
    }
});