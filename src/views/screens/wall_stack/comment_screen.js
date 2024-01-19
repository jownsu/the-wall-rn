/* REACT */
import { useState } from "react";
import { FlatList } from "react-native";

/* COMPONENTS */
import { SafeAreaView, WritePost } from "../../components/global";
import BackHeader from "./components/back_header";
import Post from "./components/post";
import ConfirmationModal from "./modals/confirmation.modal";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createComment, updateComment, deleteComment, deletePost } from "../../../redux/wall_slice";

/* CONSTANTS */
import { COLORS } from "../../../constants";

const CommentScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { current_user } = useSelector(state => state.auth);
    const { selected_post } = useSelector(state => state.wall);

    const [delete_comment_modal, setDeleteCommentModal] = useState({is_show: false, id: 0});
    const [delete_post_modal, setDeletePostModal] = useState(false);

    return (
        <SafeAreaView flex statusBarColor={COLORS.white}>
            <BackHeader onBackPress={() => navigation.pop()} />
            <FlatList
                data={selected_post.comments} 
                ListHeaderComponent={<Post 
                                        post={selected_post} 
                                        onDelete={() => setDeletePostModal(true)}
                                        is_single 
                                    />
                                }
                keyExtractor={item => item.id}
                renderItem={({item}) => <Post 
                                            post={item} 
                                            container_style={{marginLeft: 50}}
                                            onUpdate={({id, content}) => dispatch(updateComment({
                                                post_id: selected_post.id,
                                                comment_id: id,
                                                content
                                            }))}
                                            onDelete={() => setDeleteCommentModal({is_show: true, id: item.id})}
                                            is_comment 
                                        />
                            }
            />

            <WritePost 
                placeholder="Write a comment"
                handlePost={(content) => dispatch(createComment({
                    id: selected_post.id,
                    content, 
                    user: current_user
                }))}
            />

            <ConfirmationModal 
                is_show={delete_post_modal}
                onClose={() => setDeletePostModal(false)}
                onConfirm={() => {
                    dispatch(deletePost({id: selected_post.id}));
                    navigation.pop();
                }}
                title="Confirm post delete"
                message="This action cannot be undone."
                confirm_btn_text="Confirm delete"
            />

            <ConfirmationModal 
                is_show={delete_comment_modal.is_show}
                onClose={() => setDeleteCommentModal({is_show: false, id: 0})}
                onConfirm={() => dispatch(deleteComment({post_id: selected_post.id, comment_id: delete_comment_modal.id}))}
                title="Confirm comment delete"
                message="This action cannot be undone."
                confirm_btn_text="Confirm delete"
            />
        </SafeAreaView>
    )
}

export default CommentScreen;