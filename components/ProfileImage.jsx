import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

const ProfileImage = ({ navigation }) => {
  const userProfileImage = require("../assets/ellipse-51.png");

  const selectImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access camera roll is required!");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setSelectedImage(pickerResult.uri);
      }
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };

  const selectImage2 = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access camera roll is required!");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setSelectedImage(pickerResult.uri);
      }
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };

  return (
    <View style={[styles.cuadroportada]}>
      <TouchableOpacity onPress={selectImage2} style={styles.cameraButton2}>
        <Icon name="camera" size={24} color="#6e7f62" back />
      </TouchableOpacity>
      <View style={[styles.portada, styles.portadaPosition]}>
        <Image
          style={styles.portadaChild}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <TouchableOpacity onPress={selectImage2} style={styles.cameraButton2}>
          <Icon name="camera" size={24} color="#6e7f62" back />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={userProfileImage} style={styles.profileImage} />

          <TouchableOpacity onPress={selectImage} style={styles.cameraButton}>
            <Icon name="camera" size={24} color="#6e7f62" back />
          </TouchableOpacity>
          <Text style={styles.name}>Thomas Weber</Text>
          <Text style={styles.username}>@th.weber</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    top: 20,
  },

  profileImage: {
    width: 170,
    height: 170,
    resizeMode: "cover",
    borderRadius: 120,
    top: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
    color: "gray",
  },
  cameraButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    position: "center",
    bottom: 25,
    right: -60,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6e7f62",
  },
  cameraButton2: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    position: "relative",
    top: -130,
    right: 60,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6e7f62",
  },

  portadaPosition: {
    padding: 10,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },

  portadaChild: {
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    width: 340,
    height: 150,
    top: 10,
    right: 200,
  },
  portada: {
    top: -30,
    width: 380,
    margin: 10,
  },
});

export default ProfileImage;
