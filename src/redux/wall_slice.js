import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initial_state = {
    posts: [],
    selected_post: {}
};

export const wall_slice = createSlice({
    name: "wall",
    initialState: initial_state,
    reducers: {
        createPost: (state, action) => {
            const { content, user } = action.payload;

            state.posts = [
                {
                    id: Math.floor(Math.random() * 99999),
                    user: user.name,
                    user_id: user.id,
                    content,
                    created_at: new Date().toISOString(),
                    comments: []
                },
                ...state.posts
            ];

            saveToLocalStorage(state.posts);
        },
        deletePost: (state, action) => {
            const { id } = action.payload;

            state.posts = state.posts.filter(post => post.id !== id);
            saveToLocalStorage(state.posts);

        },
        updatePost: (state, action) => {
            const { id, content } = action.payload;
            
            state.posts = state.posts.map(post_item => {
                if(id === post_item.id){
                    return {
                        ...post_item,
                        content
                    }
                }

                return post_item;
            });
            saveToLocalStorage(state.posts);
        },
        createComment: (state, action) => {
            const { id, content, user } = action.payload;

            state.posts = state.posts.map(post_item => {
                if(id === post_item.id){
                    return {
                        ...post_item,
                        comments: [{
                            id: Math.floor(Math.random() * 99999),
                            user_id: user.id,
                            user: user.name,
                            created_at: new Date().toISOString(), 
                            content 
                        }, ...post_item.comments]
                    }
                }
                return post_item;
            });
            state.selected_post = state.posts.find(post => post.id === id);
            saveToLocalStorage(state.posts);
        },
        deleteComment: (state, action) => {
            const { post_id, comment_id } = action.payload;

            state.posts = state.posts.map(post_item => {
                if(post_id === post_item.id){
                    return {
                        ...post_item,
                        comments: post_item.comments.filter(comment_item => comment_item.id !== comment_id)
                    }
                }
                return post_item;
            });

            state.selected_post = state.posts.find(post => post.id === post_id);
            saveToLocalStorage(state.posts);
        },
        updateComment: (state, action) => {
            const { post_id, comment_id, content } = action.payload;

            state.posts = state.posts.map(post_item => {
                if(post_id === post_item.id){
                    return {
                        ...post_item,
                        comments: post_item.comments.map(comment_item => {
                            if(comment_item.id === comment_id){
                                return {
                                    ...comment_item,
                                    content
                                }
                            }
                            return comment_item;
                        })
                    }
                }
                return post_item;
            });
            state.selected_post = state.posts.find(post => post.id === post_id);
            saveToLocalStorage(state.posts);
        },
        selectPost: (state, action) => {
            state.selected_post = state.posts.find(post => post.id === action.payload.id);
        },
        setDefaultPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
});

const saveToLocalStorage = (posts) => {
    AsyncStorage.setItem("posts", JSON.stringify(posts));
}

export const { 
    createPost, 
    deletePost, 
    updatePost, 
    createComment,
    deleteComment,
    updateComment,
    setDefaultPosts,
    selectPost
} = wall_slice.actions;
export default wall_slice.reducer;