import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  TextInput,
  Share,
  onPress,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
// import TopBar from '../components/TopBar';
// import BottomBar from '../components/BottomBar';
import { Linking } from "react-native";

const Post = ({ route, navigation, onPress }) => {
  const { Post } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const likeButtonIcon = liked ? "heart" : "heart-outline";
  const likeButtonColor = liked ? "red" : "black";
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const scrollViewRef = useRef(null);

  const comments = [
    // { id: 1, photo: require('../assets/images/Taylor.jpg'), user: 'Taylor Swift',
    // text: 'Love it!',
    // time: '1h ago' },
    // { id: 2, photo: require('../assets/images/ariana.png'), user: 'Ariana Grande', text: 'Best album', time: '2h ago' },
    // { id: 3, photo: require('../assets/images/Harry.jpg'), user: 'Harry Styles', text: 'Legends', time: '3h ago' },
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const renderOptions = () => {
    return (
      <View style={styles.optionsContainer}>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => console.log("Copy Link")}>
          <Text>Copy Link</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => console.log("Add to Favorites")}>
          <Text>Add to Favorites</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => console.log("Follow User")}>
          <Text>Follow User</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleServiceIconPress = (service, serviceURL) => {
    if (serviceURL) {
      Linking.openURL(serviceURL);
    } else {
      console.log("URL no encontrada para este servicio");
    }
  };

  const openCommentBox = () => {
    setIsCommentBoxOpen(true);
    console.log("Comment box opened");
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const postComment = () => {
    console.log("Comment posted:", commentContent);
    setCommentContent("");
    setIsCommentBoxOpen(false);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this post on SoundVibes",
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
      <LinearGradient colors={["white", "#6e7f62"]} style={styles.container}>
        {/* <TopBar navigation={navigation} /> */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <ScrollView ref={scrollViewRef}>
            <View style={styles.container}>
              <View style={styles.container2}>
                <View style={styles.userContainer}>
                  <Image source={Post.profileImage} style={styles.userPhoto} />

                  <View style={styles.userInfo}>
                    <Text style={styles.user}>{Post.user}</Text>
                    <Text style={styles.time}>{Post.time}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.optionsContainer}
                    onPress={toggleModal}
                  >
                    <Icon name="ellipsis-vertical" size={20} color="black" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.description}>{Post.description}</Text>
                <Image source={Post.image} style={styles.image} />
                <Text style={styles.title}>{Post.title}</Text>
                <Text style={styles.year}>{Post.year}</Text>
                <Text style={styles.genre}>{Post.genre}</Text>

                <View style={styles.socialIconsContainer}>
                  {/* <TouchableOpacity
                    style={styles.socialIcon}
                    onPress={() => handleServiceIconPress("spotify", spotify)}
                  > */}
                  {/* <Image
                      source={require("../assets/icon/spotify.png")}
                      style={styles.musicServiceIcon}
                    /> */}
                  {/* </TouchableOpacity> */}
                  {/* <TouchableOpacity
                    style={styles.socialIcon}
                    onPress={() => handleServiceIconPress("youtube", youtube)}
                  > */}
                  {/* <Image
                      source={require("../assets/icon/youtube.png")}
                      style={styles.musicServiceIcon}
                    /> */}
                  {/* </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialIcon}
                    onPress={() =>
                      handleServiceIconPress("soundcloud", soundcloud)
                    }
                  > */}
                  {/* <Image
                    source={require("../assets/icon/soundcloud.png")}
                    style={styles.musicServiceIcon}
                /> */}
                  {/* </TouchableOpacity> */}
                </View>

                <View style={[styles.iconinteractivos, styles.likedPosition1]}>
                  <Image
                    style={styles.mdiheartIcon}
                    contentFit="cover"
                    source={require("../assets/mdiheart.png")}
                  />
                  <Image
                    style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/mdilightcomment.png")}
                  />
                  <Image
                    style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/circumshare1.png")}
                  />
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/vector4.png")}
                  />
                </View>
                <View style={styles.separator} />
                <View style={styles.commentContainer}>
                  {comments.map((comment, index) => (
                    <View key={comment.id}>
                      <View style={styles.comment}>
                        <LinearGradient
                          colors={["#87CEEB", "#FFA500", "#FF4500"]}
                          style={styles.profileImageContainer}
                        >
                          <Image
                            source={comment.photo}
                            style={styles.commentUserPhoto}
                          />
                        </LinearGradient>
                        <View style={styles.commentContent} key={comment.id}>
                          <Text style={styles.commentUserName}>
                            {comment.user}
                          </Text>
                          <Text style={styles.commentText}>{comment.text}</Text>
                          <Text style={styles.commentTime}>{comment.time}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>

                {isCommentBoxOpen && (
                  <View style={styles.comment2}>
                    <LinearGradient
                      colors={["#87CEEB", "#FFA500", "#FF4500"]}
                      style={styles.profileImageContainer}
                    >
                      {/* <Image
                        source={require("../assets/ellipse-51.png")}
                        style={styles.commentUserPhoto}
                      /> */}
                    </LinearGradient>
                    <TextInput
                      style={styles.commentTextInput2}
                      placeholder="Write a comment..."
                      onChangeText={(text) => setCommentContent(text)}
                      value={commentContent}
                    />
                    <TouchableOpacity onPress={postComment}>
                      <Icon name="send" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                )}

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isModalVisible}
                  onRequestClose={toggleModal}
                >
                  <View style={styles.modalContainer}>
                    <TouchableOpacity
                      style={styles.modalBackground}
                      onPress={toggleModal}
                    />
                    <View style={styles.modalContent}>{renderOptions()}</View>
                  </View>
                </Modal>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container2: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    top: 30,
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
  userPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
    top: 3,
  },
  userName: {
    display: "flex",
    textAlign: "left",
    // color: Color.colorBlack,
    letterSpacing: 0,
    // fontSize: FontSize.size_smi,
    alignItems: "center",
    // fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    width: 120,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  description: {
    fontSize: 15,
    color: "black",
    marginBottom: 5,
    textAlign: "justify",
  },
  rectangleImage: {
    width: "100%",
    height: 400,
    marginBottom: 5,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
  },
  description: {
    fontSize: 15,
    color: "black",
    marginBottom: 5,
    textAlign: "justify",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  socialIcon: {
    marginRight: 10,
  },
  musicServiceIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  commentContainer: {
    marginTop: 15,
  },
  comment: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },

  commentUserPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  commentContent: {
    flex: 1,
    paddingHorizontal: 10,
  },

  commentUserName: {
    fontWeight: "bold",
    marginRight: 5,
  },
  commentText: {
    fontSize: 14,
    textAlign: "justify",
  },

  comment2: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  commentTextInput2: {
    flex: 1,
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10,
  },

  commentTime: {
    fontSize: 12,
    color: "gray",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 15,
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 22,
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    width: "100%",
    alignSelf: "center",
    marginTop: 15,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF4500",
  },
  // year: {
  //   paddingBottom: 3,
  // },
  // genre: {
  //   paddingBottom: 6,
  // },
  user: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconinteractivos: {
    marginTop: 78,
    height: 24,
    zIndex: 2,
    right: 15,
    position: "absolute",

    bottom: 90,
  },
  likedPosition1: {
    left: 21,

    flexDirection: "row",
  },
  iconLayout: {
    marginLeft: 70,
    width: 25,
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  mdiheartIcon: {
    width: 25,
    maxHeight: "100%",
    // borderRadius: Border.br_base,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mdiLightcommentIcon: {
    // borderRadius: Border.br_base,
    overflow: "hidden",
  },
});

export default Post;
