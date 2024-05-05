import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignOutMessage = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signOutMessage, styles.frameFlexBox]}>
      <Image
        style={styles.signOutMessageChild}
        contentFit="cover"
        source={require("../assets/group-422.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.signOutOf}>Sign out of your account?</Text>
      </View>
      <Pressable
        style={styles.cancel}
        onPress={() => navigation.navigate("Feed")}
      >
        <Text style={[styles.cancel1, styles.cancel1Typo]}>Cancel</Text>
      </Pressable>
      <Pressable
        style={styles.cancel}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.signOut1, styles.cancel1Typo]}>Sign out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  cancel1Typo: {
    display: "flex",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    justifyContent: "center",
    alignItems: "center",
  },
  signOutMessageChild: {
    width: 58,
    height: 58,
  },
  signOutOf: {
    alignSelf: "stretch",
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  frame: {
    width: 170,
    height: 54,
    marginTop: 8,
  },
  cancel1: {
    width: 65,
    height: 41,
  },
  cancel: {
    marginTop: 8,
  },
  signOut1: {
    width: 85,
  },
  signOutMessage: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 40,
    paddingVertical: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SignOutMessage;
