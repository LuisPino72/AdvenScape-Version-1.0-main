import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ProfileImage from "../components/ProfileImage2";
import BottomBar from "../components/BottomBar";

const Profile = () => {
  const [iconPubContainerVisible, setIconPubContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(true);
  }, []);

  const closeIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(false);
  }, []);

  const Post = [
    {
      id: "1",
      name: "Post 1",
      user: "@th.Weber",
      profileImage: require("../assets/ellipse-51.png"),
      image: require("../assets/rectangle-11.png"),
      title: "Nature at its best",
      time: "5d ago",
    },

    {
      id: "2",
      name: "Post 2",
      user: "@th.Weber",
      profileImage: require("../assets/ellipse-51.png"),
      image: require("../assets/rectangle-12.png"),
      title: "Imagine",
      time: "8d ago",
    },

    {
      id: "3",
      name: "Post 3",
      user: "@th.Weber",
      profileImage: require("../assets/ellipse-51.png"),
      description:
        'Talking is the slowest way to communicate, music is much better. "Now and Then" is a love letter.',
      image: require("../assets/rectangle-18.png"),
      title: "Now and Then",
    },

    { id: 4, image: require("../assets/rectangle-19.png") },
    { id: 5, image: require("../assets/rectangle-14.png") },
    { id: 6, image: require("../assets/rectangle-121.png") },
    { id: 7, image: require("../assets/rectangle-17.png") },
    { id: 8, image: require("../assets/rectangle-15.png") },
    { id: 9, image: require("../assets/rectangle-16.png") },
    { id: 10, image: require("../assets/rectangle-2.png") },
    { id: 11, image: require("../assets/imgvertical3.png") },
    { id: 12, image: require("../assets/imgvertical2.png") },
  ];

  const navigateToPost = (Post) => {
    navigation.navigate("Post", { Post });
  };

  // const renderItem = ({ item }) => (
  //   <Feed
  //     description={item.description}
  //     title={item.title}
  //     year={item.year}
  //     genre={item.genre}
  //     user={item.user}
  //     profileImage={item.profileImage}
  //     image={item.image}
  //     time={item.time}
  //     onPress={() => navigateToPost(item)}
  //   />
  // );

  return (
    <View style={styles.container}>
      <LinearGradient colors={["white", "white"]} style={styles.container}>
        <ScrollView>
          <ProfileImage navigation={navigation} />
          <View style={styles.profileContainer}>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>823</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>302</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>

            <View style={styles.postsContainer}>
              {Post.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.postItem}
                  onPress={() => navigateToPost(item)}
                >
                  <Image source={item.image} style={styles.postImage} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        <Modal
          animationType="fade"
          transparent
          visible={iconPubContainerVisible}
        >
          <View style={styles.iconPubContainerOverlay}>
            <Pressable
              style={styles.iconPubContainerBg}
              onPress={closeIconPubContainer}
            />
          </View>
        </Modal>
        <BottomBar navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 16,
    top: 30,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "gray",
  },

  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    top: 20,
    marginBottom: 15,
  },
  postItem: {
    width: "32%",
    aspectRatio: 1,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default Profile;
