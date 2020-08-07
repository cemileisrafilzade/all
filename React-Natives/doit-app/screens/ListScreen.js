import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
