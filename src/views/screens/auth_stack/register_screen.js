/* REACT */
import { View, TouchableOpacity } from "react-native";

/* PLUGINS */
import { useForm } from "react-hook-form";

/* REDUX */
import { useDispatch } from "react-redux";
import { register, login } from "../../../redux/auth_slice";

/* COMPONENTS */
import { Input, SafeAreaView, Button, Text } from "../../components/global";

/* CONSTANTS */
import { COLORS } from "../../../constants";

/* STYLES */
import { styles } from "./login_register.style";


const RegisterScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { control, handleSubmit, getValues, formState : { errors } } = useForm({
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirm_password: ""
        }
    });

    const onSignUp = (form_data) => {
        dispatch(register(form_data));
        dispatch(login({email: form_data.email, password: form_data.password}));
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
                    Register
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
                    <Text style={styles.input_label}>Full name</Text>
                    <Input 
                        style={[styles.text_input, errors.name && styles.input_error]}
                        error={errors.name}
                        control={control}
                        name="name" 
                        rules={{
                            required: "Full name cannot be empty"
                        }}
                    />
                    { 
                        errors.name && 
                            <Text size={14} color={COLORS.red}>
                                {errors?.name?.message}
                            </Text>
                    }
                </View>

                <View style={{marginBottom: 10}}>
                    <Text style={styles.input_label}>Password</Text>
                    <Input 
                        style={[styles.text_input, errors.password && styles.input_error]}
                        error={errors.password}
                        control={control}
                        name="password" 
                        secureTextEntry
                        rules={{
                            required: "Password cannot be empty",
                            validate: value => value.length >= 8 || "Password must be atleast 8 characters"
                        }}
                    />
                    { 
                        errors.password && 
                            <Text size={14} color={COLORS.red}>
                                {errors?.password?.message}
                            </Text>
                    }
                </View>

                <View>
                    <Text style={styles.input_label}>Confirm Password</Text>
                    <Input 
                        style={[styles.text_input, errors.confirm_password && styles.input_error]}
                        error={errors.confirm_password}
                        control={control}
                        name="confirm_password" 
                        secureTextEntry
                        rules={{
                            required: "Password cannot be empty",
                            validate: value => value === getValues("password") || "Password must match"
                        }}
                    />
                    { 
                        errors.confirm_password && 
                            <Text size={14} color={COLORS.red}>
                                {errors?.confirm_password?.message}
                            </Text>
                    }
                </View>

                <Text center size={14} style={{marginTop: 20}}>
                    By creating an accout, you agree with The Wall's
                    <Text color={COLORS.primary}> Privacy Policy </Text>
                    and 
                    <Text color={COLORS.primary}> Terms of Use </Text>
                </Text>

                <Button 
                    title="Sign Up" 
                    style={{marginTop: 20}} 
                    onPress={handleSubmit(onSignUp)}
                />

                <View style={styles.signup_container}>
                    <Text color={COLORS.grey_dark}>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Text color={COLORS.primary}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;