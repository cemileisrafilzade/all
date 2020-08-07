import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../style/images";
import { useSafeArea } from "react-native-safe-area-context";

export const Nav = ({ back = false, create = true }) => {
  const navigation = useNavigation();
  const { top } = useSafeArea();
  return (
    <View
      style={[
        styles.topNav,
        { marginTop: top },
        { justifyContent: back ? "space-between" : "flex-end" },
      ]}
    >
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.BtnImg} source={images.arrowBack} />
        </TouchableOpacity>
      )}
      {create && (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Image style={styles.BtnImg} source={images.plusGrey} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
    height: 50,
  },
  BtnImg: {
    width: 25,
    height: 25,
  },
});
