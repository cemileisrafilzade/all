import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { connect } from "react-redux";
import { getSections } from "../redux/data";
import images from "../style/images";
import { SectionCard } from "../components";
import { Nav } from "../commons/Nav";

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export const HomeScreen = connect(mapStateToProps)((props) => {
  const { navigation, sections } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Nav />
        <View style={styles.sectionsList}>
          {sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sectionsList: {
    paddingVertical: 25,
  },
});
