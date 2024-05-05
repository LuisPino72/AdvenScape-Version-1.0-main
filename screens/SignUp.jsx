import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import CustomModal from "../components/CustomModal";
import { register } from "../api/Auth";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateInputs = () => {
    if (
      !username.trim() ||
      !password.trim() ||
      !email.trim() ||
      !name.trim() ||
      !confirmPassword.trim()
    ) {
      setErrorMessage("All fields are required");
      return false;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email format");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleContinue = async () => {
    if (!validateInputs()) {
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    const userData = {
      username,
      name,
      email,
      password,
    };

    try {
      const response = await register(userData);

      console.info(response);

      if (response?.Message === "User created") {
        console.log("Register successful!");
        setIsModalVisible(true);
      } else {
        setErrorMessage(response?.Message || "Register failed");
      }
    } catch (error) {
      console.error("Error in:", error);
      setErrorMessage("Network Error");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate("Feed");
  };

  return (
    <ImageBackground
      source={require("../assets/fondo.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.title}>To</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/advenscape-mesa-de-trabajo-1-11.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.title2}>
          Please enter the following information
        </Text>
        {errorMessage !== "" && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="  Enter username"
            keyboardType="default"
            placeholderTextColor="#5e5e5e"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="  Enter your name"
            placeholderTextColor="#5e5e5e"
            value={name}
            onChangeText={(text) => setname(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="  Enter your e-mail"
            placeholderTextColor="#5e5e5e"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={(styles.input2, styles.box)}
              placeholder="  Enter your password"
              placeholderTextColor="#5e5e5e"
              value={password}
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconContainer}
            ></TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={(styles.input2, styles.box)}
              placeholder="  Confirm your password"
              placeholderTextColor="#5e5e5e"
              value={confirmPassword}
              secureTextEntry={!showConfirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIconContainer}
            ></TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6e7f62" }]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signInText}>
        Already a member?{" "}
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </Text>
      {isModalVisible && (
        <CustomModal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          title="Account Created"
          description="Your AdvenScape account has been successfully created."
          buttonText="Accept"
        />
      )}
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
    top: 20,
    fontSize: 30,
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Roboto",
  },
  title2: {
    //please enter your....
    color: "black",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    bottom: 65,
  },
  inputContainer: {
    marginBottom: 40,
    top: -70,
    height: 45,
    width: "100%",
    left: 10,
  },
  input: {
    height: 30,
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: "white",
    flex: 1,

    padding: 10,
  },

  button: {
    borderRadius: 12,
    padding: 10,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    top: -55,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  signUpText: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "baseline",
  },

  signUpLink: {
    color: "#FF4500",
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 1,
    paddingTop: 15,
  },
  label: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  errorText: {
    color: "#6E7F62",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    bottom: 70,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    width: "100%",
  },

  logoContainer: {
    width: 300,
    height: 100,
    marginBottom: 25,
    marginTop: 10,
  },
  image: {
    width: 300,
    height: "100%",
    top: -45,
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
  signInText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 20,
    bottom: 40,
    left: -7,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  signInLink: {
    color: "#6e7f62",
    fontWeight: "bold",
    left: 5,
    bottom: -4,
  },
});

export default SignUp;
