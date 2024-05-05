import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import ProfileImage from "../components/ProfileImage";
import CustomModal from "../components/CustomModal";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");

  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setFechaNacimiento(date);
    hideDatePicker();
  };

  const validateInputs = () => {
    if (
      !name.trim() ||
      !username.trim() ||
      !email.trim() ||
      !genero.trim() ||
      !fechaNacimiento
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

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    if (!validateInputs()) {
      return;
    }

    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate("Profile");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6e7f62", "rgba(222, 221, 217, 0)"]}
        style={styles.container}
      >
        <ScrollView>
          <ProfileImage navigation={navigation} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Edit Profile</Text>

            {errorMessage !== "" && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={(styles.input, styles.box)}
                placeholder="  Enter your name"
                keyboardType="default"
                placeholderTextColor="#5e5e5e"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
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
              <Text style={styles.label}>About me</Text>
              <TextInput
                style={(styles.input, styles.box)}
                placeholder="  My information"
                keyboardType="default"
                placeholderTextColor="#5e5e5e"
                value={aboutMe}
                onChangeText={(text) => setAboutMe(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={(styles.pickerContainer, styles.input, styles.box)}>
                <Picker
                  selectedValue={genero}
                  style={styles.input2}
                  onValueChange={(itemValue) => setGenero(itemValue)}
                >
                  <Picker.Item
                    label="Select your gender"
                    value=""
                    color="black"
                  />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Birthday</Text>
              <TouchableOpacity onPress={showDatePicker}>
                <View
                  style={(styles.datePickerContainer, styles.input, styles.box)}
                >
                  <Text style={styles.datePickerText}>
                    {fechaNacimiento
                      ? fechaNacimiento.toLocaleDateString("es-ES")
                      : "Select your date of birth"}
                  </Text>
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#898F85", right: 10 },
                ]}
                onPress={handleCancel}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#6e7f62", left: 10 },
                ]}
                onPress={handleSave}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isModalVisible && (
            <CustomModal
              isVisible={isModalVisible}
              onClose={handleCloseModal}
              title="Saved changes!"
              description="Changes have been successfully saved."
              buttonText="Continue"
            />
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    bottom: 300,
  },
  inputContainer: {
    left: 8.6,
    height: 50,
    width: "100%",
    bottom: 30,
    marginTop: 12,
    marginBottom: 10,
  },

  logoContainer: {
    width: 200,
    height: 100,
    marginTop: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: -1,
    bottom: -20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 5,
    marginBottom: 45,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
    color: "white",
  },

  label: {
    color: "black",
    fontSize: 15,
  },

  datePickerContainer: {
    height: 45,
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datePickerText: {
    color: "#5e5e5e",
    flex: 1,
    top: 10,
    textAlign: "left",
    paddingLeft: 10,
  },
  pickerContainer: {
    height: 45,
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input2: {
    height: 45,
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: "#5e5e5e",
    flex: 1,
    top: -5,
  },
  errorText: {
    color: "#6e7f62",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
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
  input: {
    height: 30,
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: "white",
    flex: 1,
    padding: 10,
  },
});

export default EditProfile;
