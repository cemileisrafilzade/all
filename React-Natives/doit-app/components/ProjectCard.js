import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const ProjectCard = ({
  title,
  image,
  sectionID,
  projectID,
  clickable = true,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Project", { sectionID, projectID });
      }}
      disabled={!clickable}
    >
      <View style={[styles.projectCard, style]}>
        <Image style={styles.projectCardImg} source={{ uri: image }} />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.projectCardGradient}
        />
        <Text style={styles.projectCardName}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  projectCard: {
    width: 240,
    height: 190,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 15,
    marginRight: 30,
  },
  projectCardImg: {
    ...StyleSheet.absoluteFill,
  },
  projectCardGradient: {
    ...StyleSheet.absoluteFill,
    top: "50%",
  },
  projectCardName: {
    fontSize: 17,
    color: "white",
  },
});
