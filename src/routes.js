/* REACT */
import { useEffect } from "react";

/* PLUGINS */
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* REDUX */
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./redux/auth_slice";
import { setDefaultPosts } from "./redux/wall_slice";

/* STACKS */
import AuthStack from "./views/stacks/auth_stack";
import WallStack from "./views/stacks/wall_stack";

/* CONSTANTS */
import { DUMMY_POSTS, DUMMY_USERS } from "./constants";

const Routes = () => {
    const dispatch = useDispatch();
    const { current_user } = useSelector(state => state.auth);

    useEffect(() => {
        AsyncStorage.getItem("users")
            .then(users => {
                if(users){
                    dispatch(setUsers(JSON.parse(users)));
                }
                else{
                    dispatch(setUsers(DUMMY_USERS));
                    AsyncStorage.setItem("users", JSON.stringify(DUMMY_USERS));
                }
            });

        AsyncStorage.getItem("posts")
            .then(posts => {
                if(posts){
                    dispatch(setDefaultPosts(JSON.parse(posts)));
                }
                else{
                    dispatch(setDefaultPosts(DUMMY_POSTS));
                    AsyncStorage.setItem("posts", JSON.stringify(DUMMY_POSTS));
                }
            });
    }, []);

    return (
            <NavigationContainer>
                {
                    current_user
                        ? <WallStack />
                        : <AuthStack />
                }
            </NavigationContainer>
    );
}

export default Routes;