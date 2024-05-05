import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "../components/BottomBar";

const Favorites = () => {
  const [iconPubContainerVisible, setIconPubContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(true);
  }, []);

  const closeIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(false);
  }, []);

  const favoritesData = [
    {
      id: "1",
      user: "NF",
      profileImage: require("../assets/imguser.png"),
      image: require("../assets/rectangle-7.png"),
      title: "Let You Down",
      time: "12h ago",
      //
    },
    {
      id: "2",
      user: "Juan Pablo Isaza",
      profileImage: require("../assets/imguser1.png"),
      image: require("../assets/rectangle-72.png"),
      title: "Cuando nadie ve",
    },
    {
      id: "3",
      user: "Christopher Martin",
      profileImage: require("../assets/imguser1.png"),
      image: require("../assets/img1.jpg"),
      title: "The Scientist",
      time: "2w ago",
    },
    { id: 4, image: require("../assets/img3.jpg") },
    { id: 5, image: require("../assets/rectangle-71.png") },
    { id: 6, image: require("../assets/img4.jpg") },
    { id: 7, image: require("../assets/img5.jpg") },
    { id: 8, image: require("../assets/img6.jpg") },
    { id: 9, image: require("../assets/img7.jpg") },
    { id: 10, image: require("../assets/img8.jpg") },
    { id: 11, image: require("../assets/img9.jpg") },
    { id: 12, image: require("../assets/rectangle-14.png") },
  ];

  const goToPostDetail = (item) => {
    navigation.navigate("Post", { post: item });
  };

  return (
    <LinearGradient colors={["#6e7f62", "white"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorite Section</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.postsContainer}>
            {favoritesData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.postItem}
                onPress={() => goToPostDetail(item)}
              >
                <Image source={item.image} style={styles.postImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={iconPubContainerVisible}>
        <View style={styles.iconPubContainerOverlay}>
          <Pressable
            style={styles.iconPubContainerBg}
            onPress={closeIconPubContainer}
          />
        </View>
      </Modal>
      <BottomBar navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: -1,
    width: 400,
    height: 50,
  },
  title: {
    color: "#6e7f62",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    top: 5,
  },
  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 2,
    marginTop: 20,
  },
  postItem: {
    width: 180,
    height: 140,

    aspectRatio: 1,
    marginVertical: -10,
    marginHorizontal: 3,
    margin: 10,
  },
  postImage: {
    width: "100%",
    height: "100%",
    width: 180,
    height: 150,
    borderRadius: 15,
    right: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
});

export default Favorites;
