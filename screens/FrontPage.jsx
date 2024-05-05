import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  PanResponder,
  Image,
  Color,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FrontPage = ({ navigation }) => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 100 });
  const [buttonToggled, setButtonToggled] = useState(false);

  const handleMove = (_, gestureState) => {
    const { dy } = gestureState;
    setButtonPosition((prevPosition) => {
      let sensitivity = 2;
      if (buttonToggled) {
        sensitivity = 4;
      }
      const newPosY = prevPosition.y + dy * sensitivity;
      const minY = 0;
      const maxY = 100;
      const limitedPosY = Math.max(minY, Math.min(newPosY, maxY));
      return { ...prevPosition, y: limitedPosY };
    });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handleMove,
    onPanResponderRelease: () => {
      if (buttonPosition.y === 0) {
        navigation.navigate("SignIn");
        setButtonPosition({ x: 0, y: 100 });
      }
    },
  });

  return (
    <ImageBackground
      source={require("../assets/rectangle-1.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/advenscape-mesa-de-trabajo-1-1.png")}
            style={styles.image}
          />
        </View>
        <Text style={[styles.titleContainer]}>
          <Text style={styles.title}>{`Connect  `}</Text>
          <Text style={styles.title2}>with travelers from around the word</Text>
        </Text>

        <LinearGradient
          colors={["rgba(255, 255, 255, 0.0)", "#6E7F62"]}
          style={styles.buttonContainer}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity
            style={[styles.button, { top: buttonPosition.y }]}
            activeOpacity={1}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 150,
    width: 51,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
  },
  logoContainer: {
    width: 300,
    height: 100,
    marginBottom: 25,
    marginTop: 80,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#6E7F62",
    fontSize: 18,
  },
  title: {
    color: "#000",
    fontSize: 40,
  },
  title2: {
    color: "#fff",
  },
  titleContainer: {
    paddingTop: 25,
    fontSize: 35,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
    flex: 1,
    width: "80%",
  },
});

export default FrontPage;
