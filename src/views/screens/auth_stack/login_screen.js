/* REACT */
import { View, TouchableOpacity } from "react-native";

/* PLUGINS */
import { useForm } from "react-hook-form";

/* REDUX */
import { login } from "../../../redux/auth_slice";
import { useDispatch } from "react-redux";

/* COMPONENTS */
import { Input, SafeAreaView, Button, Text } from "../../components/global";

/* CONSTANTS */
import { COLORS } from "../../../constants";

/* STYLES */
import { styles } from "./login_register.style";

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const { control, handleSubmit, formState : { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSignIn = (form_data) => {
        dispatch(login(form_data));
    }

    return (
        <SafeAreaView flex center>
            <View style={styles.login_container}>
                <Text 
                    weight="medium"
                    color={COLORS.primary}
                    size={22}
                    style={{
                        marginBottom: 20
                    }}
                >
                    The Wall
                </Text>

                <Text
                    weight="semi_bold"
                    color={COLORS.primary_dark}
                    size={40}
                    style={{
                        marginBottom: 10
                    }}
                >
                    Log In
                </Text>

                <View style={{marginBottom: 10}}>
                    <Text style={styles.input_label}>Email</Text>
                    <Input 
                        style={[styles.text_input, errors.email && styles.input_error]} 
                        error={errors.email}
                        placeholder="youremail@gmail.com" 
                        placeholderTextColor={COLORS.grey_dark}
                        control={control}
                        name="email"
                        rules={{
                            required: "Email Cannot be empty",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email must be valid"
                            }
                        }}
                    />
                    { 
                        errors.email && 
                            <Text size={14} color={COLORS.red}>
                                {errors?.email?.message}
                            </Text> 
                    }
                </View>

                <View>
                    <Text style={styles.input_label}>Password</Text>
                    <TouchableOpacity style={styles.forgot_password}>
                        <Text size={14} color={COLORS.grey_dark}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Input 
                        style={[styles.text_input, errors.password && styles.input_error]}
                        error={errors.password}
                        control={control}
                        name="password" 
                        secureTextEntry
                        rules={{required: "Password cannot be empty"}}
                    />
                    { 
                        errors.password && 
                            <Text size={14} color={COLORS.red}>
                                {errors?.password?.message}
                            </Text>
                    }
                </View>

                <Button 
                    title="Sign in" 
                    style={{marginTop: 30}} 
                    onPress={handleSubmit(onSignIn)}
                />

                <View style={styles.signup_container}>
                    <Text color={COLORS.grey_dark}>I don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                        <Text color={COLORS.primary}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;