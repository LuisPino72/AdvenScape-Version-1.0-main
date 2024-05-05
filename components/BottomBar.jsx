import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomBar = () => {
  const navigation = useNavigation();
  const [isAddPostModalVisible, setAddPostModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const route = useRoute();

  const toggleAddPostModal = () => {
    setAddPostModalVisible(!isAddPostModalVisible);
  };

  const handleAddPost = () => {
    toggleAddPostModal();
  };

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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
        <Icon
          name="home"
          size={25}
          color={route.name === "Feed" ? "#6e7f62" : "grey"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Fovorite")}>
        <Icon
          name="star"
          size={25}
          color={route.name === "Fovorite" ? "#6e7f62" : "grey"}
        />
      </TouchableOpacity>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleAddPost} style={styles.addButton}>
          <Icon name="add-circle" size={30} color="#6e7f62" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Serch")}>
        <Icon
          name="search"
          size={25}
          color={route.name === "Serch" ? "#6e7f62" : "grey"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon
          name="person"
          size={25}
          color={route.name === "Profile" ? "#6e7f62" : "grey"}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddPostModalVisible}
        onRequestClose={toggleAddPostModal}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={toggleAddPostModal}
                style={styles.closeIcon}
              >
                <Icon name="close" size={25} color="black" />
              </TouchableOpacity>
              <View style={styles.separator} />

              <View style={styles.header}>
                <Image
                  source={require("../assets/ellipse-51.png")}
                  style={styles.circularImage}
                />
                <Text
                  style={{ fontSize: 16, color: "grey", top: 15, left: 10 }}
                >
                  Post your trips...
                </Text>
              </View>

              <TextInput
                style={styles.largeInput}
                placeholder="|"
                multiline={true}
              />

              <View style={styles.separator} />
              <TouchableOpacity
                onPress={selectImage}
                style={styles.selectButton}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "normal" }}
                >
                  Photo / Video
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddPost}
                style={styles.publishButton}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "normal" }}
                >
                  Share Post
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 5,
  },
  addButton: {
    borderRadius: 25,
    padding: 10,
    top: 5,
  },
  modalContainer: {
    marginTop: 120,
    width: 300,
    height: 290,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  circularImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    top: 15,
  },
  largeInput: {
    width: "80%",
    height: 100,
    padding: 20,
    top: -20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  separator: {
    height: 2,
    top: 15,
    backgroundColor: "#6e7f62",
    width: "90%",
    alignSelf: "center",
    marginVertical: 7,
  },

  closeIcon: {
    marginLeft: "auto",
    marginRight: 10,
    top: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
  },

  publishButton: {
    width: 100,
    backgroundColor: "#6e7f62",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 10,
    right: 25,
    bottom: 35,
  },

  selectButton: {
    width: 100,
    backgroundColor: "#6e7f62",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    left: 34,
    marginRight: 10,
    top: 31,
  },
  attachIconContainer: {
    width: 20,
    height: 20,
    paddingLeft: 265,
    right: 210,
  },

  attachIcon: {
    width: 20,
    height: 20,
    top: -10,
    right: 10,
    backgroundColor: "#6e7f62",
  },

  profileImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default BottomBar;
