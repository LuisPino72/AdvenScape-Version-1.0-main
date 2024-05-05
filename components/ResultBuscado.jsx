import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ResultBuscado = ({
  ellipse8,
  venezuela,
  mPosts,
  resultBuscadoPosition,
}) => {
  const resultBuscadoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", resultBuscadoPosition),
    };
  }, [resultBuscadoPosition]);

  return (
    <View style={[styles.resultbuscado, resultBuscadoStyle]}>
      <View style={styles.imgbuscado}>
        <Image
          style={styles.imgbuscadoChild}
          contentFit="cover"
          source={ellipse8}
        />
      </View>
      <View style={styles.textbuscado}>
        <Text style={[styles.venezuela, styles.mPostsFlexBox]}>
          {venezuela}
        </Text>
        <Text style={[styles.mPosts, styles.mPostsFlexBox]}>{mPosts}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mPostsFlexBox: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  imgbuscadoChild: {
    width: 30,
    height: 30,
    top: 8,
  },
  imgbuscado: {
    flexDirection: "row",
  },
  venezuela: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    height: 46,
    top: 19,
    left: 10,
  },
  mPosts: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGainsboro_200,
    height: 12,
    left: 10,
  },
  textbuscado: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  resultbuscado: {
    backgroundColor: Color.colorWhite,
    width: 359,
    height: 56,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ResultBuscado;
