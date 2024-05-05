import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SignOutMessage from "./SignOutMessage";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const MenuProfile = ({ onClose }) => {
  const [signOutTextVisible, setSignOutTextVisible] = useState(false);
  const navigation = useNavigation();

  const openSignOutText = useCallback(() => {
    setSignOutTextVisible(true);
  }, []);

  const closeSignOutText = useCallback(() => {
    setSignOutTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.menuprofile}>
        <Image
          style={[styles.fondoIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fondo3.png")}
        />
        <View style={[styles.logo, styles.logoPosition]}>
          <Image
            style={[styles.logoIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
        </View>
        <Image
          style={[styles.ingportadaIcon, styles.logoPosition]}
          contentFit="cover"
          source={require("../assets/ingportada.png")}
        />
        <Image
          style={[styles.menuprofileChild, styles.logoPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
        <Pressable
          style={[styles.signout, styles.signoutFlexBox]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Image
            style={styles.signoutChild}
            contentFit="cover"
            source={require("../assets/group-59.png")}
          />
          <Pressable style={styles.signOut} onPress={openSignOutText}>
            <Text style={styles.signOut1}>Sign out</Text>
          </Pressable>
        </Pressable>
        <Pressable
          style={[styles.editprofile, styles.signoutFlexBox]}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Image
            style={styles.signoutChild}
            contentFit="cover"
            source={require("../assets/group-62.png")}
          />
          <Pressable
            style={styles.signOut}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.signOut1}>Edit Profile</Text>
          </Pressable>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={signOutTextVisible}>
        <View style={styles.signOutTextOverlay}>
          <Pressable style={styles.signOutTextBg} onPress={closeSignOutText} />
          <SignOutMessage onClose={closeSignOutText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
  },
  logoPosition: {
    left: "50%",
    position: "absolute",
  },
  signoutFlexBox: {
    flexDirection: "row",
    left: 20,
    top: "50%",
    position: "absolute",
    alignSelf: "stretch",
    alignItems: "center",
  },
  fondoIcon: {
    zIndex: 0,
    flex: 1,
    maxHeight: "100%",
  },
  logoIcon: {
    height: 65,
  },
  logo: {
    marginLeft: -96,
    bottom: 24,
    width: 192,
    zIndex: 1,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  ingportadaIcon: {
    marginLeft: -140,
    top: 0,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    height: 230,
    zIndex: 2,
    width: 280,
    left: "50%",
    position: "absolute",
  },
  menuprofileChild: {
    marginLeft: -56,
    top: 170,
    width: 110,
    height: 114,
    zIndex: 3,
  },
  signoutChild: {
    width: 30,
    height: 30,
  },
  signOutTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  signOutTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  signOut1: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 33,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    height: 13,
    flex: 1,
    alignItems: "center",
  },
  signOut: {
    marginLeft: 8,
  },
  signout: {
    marginTop: 176,
    zIndex: 4,
  },
  editprofile: {
    marginTop: 124,
    zIndex: 5,
  },
  menuprofile: {
    backgroundColor: Color.colorWhite,
    height: 900,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
  },
});

export default MenuProfile;
