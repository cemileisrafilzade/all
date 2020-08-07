import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import images from "../style/images";

import { ProjectCard } from "./";

export const SectionCard = ({ section }) => {
  const navigation = useNavigation();
  const { name, projects } = section;
  const projectsCount = projects.length;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.count}>{projectsCount}</Text>
        <TouchableOpacity style={styles.listBtn}>
          <Image style={styles.listBtnImg} source={images.dots} />
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.projectsList}
        horizontal={true}
        data={projects}
        renderItem={({ item }) => (
          <ProjectCard
            title={item.name}
            image={item.imgUri}
            sectionID={section.id}
            projectID={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  count: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.4)",
  },
  listBtnImg: {
    width: 20,
    height: 20,
  },
  projectsList: {
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
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
