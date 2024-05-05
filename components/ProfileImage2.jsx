import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import MenuProfile from "./MenuProfile";

const ProfileImage2 = ({ navigation }) => {
  //aca

  const [
    menuPcionesSalirContainerVisible,
    setMenuPcionesSalirContainerVisible,
  ] = useState(false);

  const openMenuPcionesSalirContainer = useCallback(() => {
    setMenuPcionesSalirContainerVisible(true);
  }, []);

  const closeMenuPcionesSalirContainer = useCallback(() => {
    setMenuPcionesSalirContainerVisible(false);
  }, []);
  //hasta aca

  const userProfileImage = require("../assets/ellipse-51.png");

  return (
    <View style={[styles.cuadroportada]}>
      <View style={[styles.portada, styles.portadaPosition]}>
        <Image
          style={styles.portadaChild}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={userProfileImage} style={styles.profileImage} />
          <Text style={styles.name}>Thomas Weber</Text>
          <Text style={styles.username}>@th.weber</Text>
          <Text style={[styles.descripcion, styles.editProfileTypo]}>
            A lover of unique experiences and unforgettable memories 🌟
          </Text>
        </View>
        <Pressable
          style={[styles.menupcionessalir]}
          onPress={openMenuPcionesSalirContainer}
        >
          <Image
            style={styles.menupcionessalirChild}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Image
            style={styles.mingcutegridLineIcon}
            contentFit="cover"
            source={require("../assets/mingcutegridline.png")}
          />
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent
        visible={menuPcionesSalirContainerVisible}
      >
        <View style={styles.menuPcionesSalirContainerOverlay}>
          <Pressable
            style={styles.menuPcionesSalirContainerBg}
            onPress={closeMenuPcionesSalirContainer}
          />
          <MenuProfile onClose={closeMenuPcionesSalirContainer} />
        </View>
      </Modal>

      <TouchableOpacity
        style={[styles.botoneditprof, styles.infouserFlexBox]}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={[styles.editProfile, styles.editProfileTypo]}>
          Edit profile
        </Text>
      </TouchableOpacity>
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
    top: 40,
  },

  profileImage: {
    width: 170,
    height: 170,
    resizeMode: "cover",
    borderRadius: 120,
    top: 25,
  },
  name: {
    fontSize: 20,
    fontWeight: "normal",
    top: 25,
  },
  username: {
    fontSize: 16,
    color: "gray",
    top: 25,
  },
  descripcion: {
    width: 303,
    height: 48,
    fontWeight: "600",
    display: "flex",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    top: 30,
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
    width: 367,
    height: 155,
    top: -20,
    right: 200,
  },
  portada: {
    top: 0,
    width: 380,
    margin: 10,
  },
  editProfileTypo: {
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 0,
  },
  editProfile: {
    fontWeight: "700",
    color: "white",
    flex: 1,
  },
  botoneditprof: {
    top: 40,
    backgroundColor: "#6e7f62",
    width: 100,
    height: 30,
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 12,
    marginTop: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    left: 150,
  },
  menuPcionesSalirContainerOverlay: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuPcionesSalirContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 50,
    top: 0,
  },
  menupcionessalirChild: {
    width: 30,
    height: 30,
    zIndex: 0,
    top: 0,
  },
  mingcutegridLineIcon: {
    top: 3,
    left: 3,
    width: 24,
    height: 24,
    overflow: "hidden",
    zIndex: 1,
    position: "absolute",
  },
  menupcionessalir: {
    top: -250,
    left: 340,
    flexDirection: "row",
  },
});

export default ProfileImage2;
