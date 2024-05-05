import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Share } from "react-native";

const Feed = ({
  title,
  descrip,
  user,
  profileImage,
  image,
  time,
  likeby,
  all,
  navigation,
  onPress,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddCommentModalVisible, setAddCommentModalVisible] = useState(false);
  const [starred, setStarred] = useState(false);
  const [liked, setLiked] = useState(false);

  const handlePress = () => {
    onPress();
    setIsModalVisible(false);
  };

  const handleStar = () => {
    setStarred(!starred);
  };
  const handleLike = () => {
    setLiked(!liked);
  };
  const handleGoToPublication = () => {
    setIsModalVisible(false);
    navigation.navigate("Post", {
      post: {
        title,
        descrip,
        user,
        profileImage,
        image,
        time,
        likeby,
        all,
      },
    });
  };

  const navigateToPostScreen = (post) => {
    navigation.navigate("Post", {
      post: {
        title: post.title,
        descrip: post.descrip,
        user: post.user,
        profileImage: post.profileImage,
        image: post.image,
        time: post.time,
        likeby: post.likeby,
        all: post.all,
      },
    });
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleAddCommentModal = () => {
    setAddCommentModalVisible(!isAddCommentModalVisible);
  };

  const handleAddComment = () => {
    toggleAddCommentModal();
  };

  const renderOptions = () => {
    if (
      user === "Alanna36" ||
      user === "Halle_Kunze" ||
      user === "Beatrice" ||
      user === "Francisco_Keeling"
    ) {
      return (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => console.log("Hide Post")}>
            <Text>Hide Post</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log("Copy Link")}>
            <Text>Copy Link</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={handlePress}>
            <Text>Go to Publication</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (user === "John Lennon") {
      return (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => console.log("Edit Post")}>
            <Text>Edit Post</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log("Delete Post")}>
            <Text>Delete Post</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this post on AdvenScape",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={profileImage} style={styles.userPhoto} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.optionsContainer} onPress={toggleModal}>
          <Icon name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.rectangleImage} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <Icon
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : "red"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddComment}>
          <Icon name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onShare}>
          <Icon name="share-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleStar}>
          <Icon
            name={starred ? "star" : "star-outline"}
            size={24}
            color={starred ? "rgb(255, 215, 0)" : "rgb(255, 215, 0)"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            source={require("../assets/imgliked.png")}
            style={styles.Icon}
          />
          <Text style={styles.likeby}>{likeby}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBo}>
        <Text style={styles.descrip}>{descrip}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.allComment}>
        <Text style={styles.all}>{all}</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer1}>
          <TouchableOpacity
            style={styles.modalBackground1}
            onPress={toggleModal}
          />
          <View style={styles.modalContent1}>{renderOptions()}</View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
  },
  socialIcon: {
    marginRight: 10,
    flexDirection: "row",
  },
  Icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  likeby: {
    left: 10,
    color: "grey",
    textAlign: "center",
    top: 2,
  },
  all: {
    color: "grey",
    fontSize: 12,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  userPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  rectangleImage: {
    width: "100%",
    height: 200,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 15,
  },
  descrip: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  containerBo: {
    flexDirection: "row",
  },
  // details: {
  //   fontSize: 14,
  //   color: "gray",
  //   marginBottom: 5,
  // },

  profileImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  modalContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground1: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContent1: {
    backgroundColor: "#F1F0EE",
    borderRadius: 20,
    padding: 22,
    height: 180,
    alignItems: "center",
  },
  separator: {
    backgroundColor: "#A19895",
    width: "80%",
    alignSelf: "center",
    marginVertical: 8,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6e7f62",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    bottom: 8,
    width: 350,
    left: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
  },
});

export default Feed;
