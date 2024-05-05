import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TopBar from "../components/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import Feed from "../components/FeedC";
import { BackHandler } from "react-native";
import BottomBar from "../components/BottomBar";

const FeedScreen = ({ navigation }) => {
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

  const feedData = [
    {
      id: "1",
      name: "Post 1",
      user: "Alanna36",
      profileImage: require("../assets/imguser.png"),
      image: require("../assets/rectangle-7.png"),
      title: "Paseo por las calles de New York",
      descrip: "Alana36",
      time: "5d ago",
      likeby: "Liked by gonzalo99 and 310 others",
      all: "View all 15 comments",
    },

    {
      id: "2",
      name: "Post 2",
      user: "Halle_Kunze",
      descrip: "Halle_Kunze",
      profileImage: require("../assets/profile4.png"),
      image: require("../assets/rectangle-71.png"),
      title: "Quebec City",
      time: "10h ago",
      likeby: "Liked by Amanda and 142 others",
      all: "View all 9 comments",
    },

    {
      id: "3",
      name: "Post 3",
      user: "Beatrice",
      profileImage: require("../assets/imguser2.png"),
      image: require("../assets/rectangle-72.png"),
      title: "omg, the beauty of the valley of monuments",
      descrip: "Beatrice",
      time: "6d ago",
      likeby: "83 likes",
      all: "View all 3 comments",
    },

    {
      id: "4",
      name: "Post 4",
      user: "Francisco_Keeling",
      profileImage: require("../assets/profile4.png"),
      image: require("../assets/rectangle-73.png"),
      title: `Happy Place`,
      descrip: "Francisco_Keeling",
      time: "1w ago",
      likeby: "Liked by Beatrice and 432 others",
      all: "View all 27 comments",
    },
  ];

  const navigateToPostScreen = (post) => {
    navigation.navigate("Post", { post });
  };

  const renderItem = ({ item }) => (
    <Feed
      title={item.title}
      descrip={item.descrip}
      user={item.user}
      profileImage={item.profileImage}
      image={item.image}
      time={item.time}
      likeby={item.likeby}
      all={item.all}
      onPress={() => navigateToPostScreen(item)}
    />
  );

  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <TopBar navigation={navigation} />

      <View style={styles.container}>
        <FlatList
          data={feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <BottomBar navigation={navigation} />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  feedItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
});

export default FeedScreen;
