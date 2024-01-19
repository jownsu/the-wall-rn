import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

let initial_state = {
    current_user: null,
    users: []
};

export const auth_slice = createSlice({
    name: "auth",
    initialState: initial_state,
    reducers: {
        login: (state, action) => {
            const {email, password} = action.payload;

            let selected_user = state.users.find(user => user.email === email);

            if(selected_user && selected_user.password === password){
                state.current_user = selected_user;
            }
            else{
                Alert.alert("Login Failed", "Invalid Credentials");
            }
        },
        logout: (state) => {
            state.current_user = null;
        },
        register: (state, action) => {
            const { email, password, name } = action.payload;

            let new_user = {
                id: Math.floor(Math.random() * 99999),
                email,
                name,
                password        
            };

            state.users = [...state.users, new_user];

            AsyncStorage.getItem("users")
                .then(users => {
                    let current_users = JSON.parse(users);

                    AsyncStorage.setItem("users", JSON.stringify([...current_users, new_user]));
                });
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { login, logout, setUsers, register } = auth_slice.actions;
export default auth_slice.reducer;