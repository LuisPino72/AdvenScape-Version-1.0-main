import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultBuscado from "../components/ResultBuscado";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import BottomBar from "../components/BottomBar";

const Serch = () => {
  const [iconPubContainerVisible, setIconPubContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(true);
  }, []);

  const closeIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.serch}>
        <View style={[styles.buscar, styles.buscarPosition]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <TextInput
            style={[styles.search, styles.searchTypo]}
            placeholder="Search"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={[styles.recent, styles.buscarPosition]}>
          <Text style={[styles.recent1, styles.searchTypo]}>Recent</Text>
        </View>
        <View style={[styles.resultadosbuscados, styles.buscarPosition]}>
          <View style={styles.property1default}>
            <ResultBuscado
              ellipse8={require("../assets/ha.png")}
              venezuela="venezuela"
              mPosts="5.7M posts"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ha.png")}
              venezuela="Moscú"
              mPosts="144k posts"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ha.png")}
              venezuela="NewYorkCity"
              mPosts="35.8M posts"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-811.png")}
              venezuela="Sidney_Bruen43"
              mPosts="Sidney Violet Bruen"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-82.png")}
              venezuela="Bobbie.traveler"
              mPosts="Bobbie Jackon 🐾"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/profile4.png")}
              venezuela="Francisco_Keeling"
              mPosts="Frann Kelling"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/imguser.png")}
              venezuela="Alanna36"
              mPosts="Alanna Sucker"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-85.png")}
              venezuela="travel_agency_kit"
              mPosts="Kit"
              resultBuscadoPosition="unset"
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={iconPubContainerVisible}>
        <View style={styles.iconPubContainerOverlay}>
          <Pressable
            style={styles.iconPubContainerBg}
            onPress={closeIconPubContainer}
          />
        </View>
      </Modal>
      <BottomBar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  buscarPosition: {
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  searchTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    flex: 1,
  },
  iconPubContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  iconPubContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  search: {
    marginLeft: 6,
  },
  buscar: {
    marginLeft: -174,
    top: 30,
    borderRadius: 15,
    backgroundColor: "#c1cebd",
    width: 349,
    height: 45,
    paddingHorizontal: 14,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  recent1: {
    letterSpacing: 0,
    color: Color.colorBlack,
    textAlign: "center",
    top: -5,
    left: -150,
  },
  recent: {
    marginLeft: -179,
    top: 90,
    width: 359,
    height: 40,
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  property1default: {
    width: 340,
    flexDirection: "row",
    left: -2,
  },
  property1default1: {
    flexDirection: "row",
  },
  resultadosbuscados: {
    marginLeft: -171,
    top: 100,
    borderRadius: 5,
    width: 342,
    height: 475,
    paddingHorizontal: 0,
    paddingVertical: 20,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },

  serch: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 650,
    overflow: "hidden",
    flex: 1,
  },
});

export default Serch;
