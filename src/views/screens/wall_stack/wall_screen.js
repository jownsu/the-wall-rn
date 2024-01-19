/* REACT */
import { useState } from "react";
import { FlatList} from "react-native";

/* COMPONENTS */
import { SafeAreaView } from "../../components/global";
import Header from "./components/header";
import EmptyPost from "./components/empty_post";
import Post from "./components/post";
import ConfirmationModal from "./modals/confirmation.modal";
import { WritePost } from "../../components/global";

/* REDUX */
import { useSelector, useDispatch } from "react-redux";
import { createPost, updatePost, deletePost, selectPost } from "../../../redux/wall_slice";

/* CONSTANTS */
import { COLORS } from "../../../constants";

const WallScreen = ({navigation}) => {
    const { posts } = useSelector(state => state.wall);
    const { current_user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [delete_post_modal, setDeletePostModal] = useState({is_show: false, id: 0});

    return (
        <SafeAreaView 
            flex 
            style={{ overflow: "hidden", paddingBottom: 5 }} 
            statusBarColor={COLORS.white}
        >
            <Header />

            <FlatList 
                data={posts}
                ListEmptyComponent={<EmptyPost />}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Post 
                                            post={item} 
                                            onPress={() => {
                                                navigation.navigate("CommentScreen");
                                                dispatch(selectPost({id: item.id}))
                                            }}
                                            onDelete={() => setDeletePostModal({is_show: true, id: item.id})}
                                            onUpdate={(post_data) => dispatch(updatePost(post_data))}
                                        />
                }
            />

            <WritePost 
                placeholder="Write a post"
                handlePost={(content) => dispatch(createPost({
                    content, 
                    user: current_user
                }))}
            />

            <ConfirmationModal 
                is_show={delete_post_modal.is_show}
                onClose={() => setDeletePostModal({is_show: false, id: 0})}
                onConfirm={() => dispatch(deletePost({id: delete_post_modal.id}))}
                title="Confirm post delete"
                message="This action cannot be undone."
                confirm_btn_text="Confirm delete"
            />
        </SafeAreaView>
    )
}

export default WallScreen