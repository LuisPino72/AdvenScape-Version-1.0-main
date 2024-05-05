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

const ChangePassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate("SignIn");
  };

  const validateInputs = () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      setErrorMessage("All fields are required");
      return false;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return (
    <ImageBackground
      source={require("../assets/fondo2.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Set your new password</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/advenscape-mesa-de-trabajo-1-13.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title2}>
          Your new password should be different from{" "}
        </Text>
        <Text style={styles.title3}> the password previously used</Text>
        {errorMessage !== "" && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <View style={styles.inputTitleContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/password-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.inputTitle}>New Password</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="   Password"
            placeholderTextColor="#5e5e5e"
            value={newPassword}
            secureTextEntry={true}
            onChangeText={(text) => setNewPassword(text)}
          />
        </View>

        <View style={styles.inputTitleContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/password-icon.png")}
              style={styles.icon2}
            />
            <Text style={styles.inputTitle2}>Confirm Password</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="  Confirm Password"
            placeholderTextColor="#5e5e5e"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6e7f62" }]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInLink}>Return to the Sign In</Text>
        </TouchableOpacity>
        {isModalVisible && (
          <CustomModal
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            title="Password Changed!"
            description="Your password has been successfully reset, click below to continue your access."
            buttonText="Continue"
          />
        )}
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
    fontSize: 25,
    justifyContent: "center",
    alignContent: "center",
    top: 70,
  },
  title2: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",
    bottom: 80,
  },
  title3: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",
    marginBottom: 20,
    bottom: 80,
  },

  image: {
    width: 300,
    height: "100%",
  },

  logoContainer: {
    width: 300,
    height: 100,
    marginBottom: 25,
    marginTop: 40,
    bottom: 120,
    left: -5,
  },

  button: {
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 30,
    bottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  signInLink: {
    color: "#6e7f62",
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 45,
    top: 30,
  },

  errorText: {
    color: "#6e7f62",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  inputTitleContainer: {
    width: "100%",
    marginBottom: 5,
    right: 25,
  },
  inputTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    right: 85,
    bottom: -8,
  },
  inputTitle2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    right: 70,
    bottom: -8,
  },
  inputContainer: {
    flexDirection: "row",
    margin: 2,
    width: "100%",
    justifyContent: "center",
    left: 9,
  },
  icon: {
    marginTop: 8,
    width: 20,
    height: 20,
    right: 80,
    marginRight: 10,
  },
  icon2: {
    marginTop: 8,
    width: 20,
    height: 20,
    right: 65,
    marginRight: 10,
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
});

export default ChangePassword;
