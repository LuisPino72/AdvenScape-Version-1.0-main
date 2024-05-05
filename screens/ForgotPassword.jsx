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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate("ChangePassword");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInputs = () => {
    if (!email.trim()) {
      setErrorMessage("E-mail are required");
      return false;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Invalid e-mail format");
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
        <Text style={styles.title}>Recover your account</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/advenscape-mesa-de-trabajo-1-13.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title2}>Enter your e-mail and</Text>
        <Text style={styles.title3}>
          we'll send you a link to log back into
        </Text>
        <Text style={styles.title4}> your account</Text>
        {errorMessage !== "" && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <View style={styles.inputTitleContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/email-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.inputTitle}>E-mail </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={(styles.input, styles.box)}
            placeholder="   Enter e-mail address"
            placeholderTextColor="#5e5e5e"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6e7f62" }]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Send access link</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signUpLink}>Back</Text>
        </TouchableOpacity>
        <CustomModal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          title="E-mail sent"
          description="We send an email to your email address with a link to regain access to your account.."
          buttonText="Accept"
        />
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
    fontFamily: "Roboto",
    top: 70,
  },
  title2: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "light",
    bottom: 80,
  },
  title3: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "light",
    bottom: 80,
  },
  title4: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 20,
    fontWeight: "light",
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

  signUpLink: {
    color: "#6e7f62",
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 45,
    top: 100,
  },
  errorText: {
    color: "#6e7f62",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },

  inputTitleContainer: {
    width: "100%",
    marginBottom: 5,
    right: 50,
  },
  inputTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    right: 85,
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

export default ForgotPassword;
