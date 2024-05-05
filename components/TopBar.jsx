import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const TopBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/advenscape-mesa-de-trabajo-1-1.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  logo: {
    width: 160,
    height: "100%",
    justifyContent: "center",
  },
});

export default TopBar;
