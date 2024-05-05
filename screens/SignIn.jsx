import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { BackHandler } from "react-native";
import { login } from "../api/Auth/index";

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [navigation]);

  const handleLogin = async () => {
    try {
      const response = await login(username, password);

      console.info(response);

      if (response?.Message === "Success") {
        console.log("Login successful!");
      } else {
        setErrorMessage(response?.Message || "Login failed");
        return;
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Network Error");
      return;
    }

    setErrorMessage("");

    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required");
      return;
    }

    navigation.navigate("Feed");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ImageBackground
      source={require("../assets/fondo.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title}>to </Text>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/advenscape-mesa-de-trabajo-1-11.png")}
            style={styles.image}
          />
        </View>

        {errorMessage !== "" && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <View style={styles.inputTitleContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/user-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.inputTitle}>E-mail or Username</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="   Example@gmail.com"
            placeholderTextColor="#5e5e5e"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputTitleContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/password-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.inputTitle}>Password</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="   Password"
            placeholderTextColor="#5e5e5e"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6e7f62" }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.containerForgot}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={[styles.forgotPassword, { marginLeft: "auto" }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpText}>
          Don't have an account?{" "}
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    padding: 16,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  title: {
    color: "black",
    top: -20,
    fontSize: 30,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "light",
    fontFamily: "Roboto",
  },

  inputTitleContainer: {
    width: "100%",
    marginBottom: 5,
  },
  inputTitle: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 1,
    width: "100%",
    justifyContent: "center",
  },
  icon: {
    marginTop: 8,
    width: 20,
    height: 20,
    left: 20,
  },
  image: {
    width: 300,
    height: "100%",
    top: -120,
  },
  logoContainer: {
    width: 300,
    height: 100,
    marginBottom: 25,
    marginTop: 60,
  },
  input: {
    height: 35,
    borderColor: "transparent",
    borderWidth: 1,
    marginBottom: 5,
    padding: 8,
    backgroundColor: "transparent",
    borderRadius: 4,
    color: "white",
    flex: 1,
  },

  button: {
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  forgotPassword: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 30,
    fontFamily: "Roboto",
  },
  signUpText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 20,
    bottom: -30,
    left: -10,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerForgot: {
    alignItems: "flex-end",
    marginLeft: 170,
  },

  signUpLink: {
    color: "#6e7f62",
    fontWeight: "bold",
    left: 5,
    bottom: -4,
  },
  errorText: {
    color: "#6e7f62",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  box: {
    borderStyle: "solid",
    borderColor: "#6e7f62",
    borderWidth: 2,
    height: 45,
    width: 223,
    width: "100%",
    right: 10,
    borderRadius: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 10,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10,
    marginLeft: -5,
  },
});

export default SignIn;
