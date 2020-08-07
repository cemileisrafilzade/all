import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import images from "../style/images";

export const TodoForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onAddPress = () => {
    if (value.trim() !== "") {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} style={styles.field} />
      <TouchableOpacity style={styles.btn} onPress={onAddPress}>
        <Image source={images.plusWhite} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  field: {
    backgroundColor: "#eee",
    borderRadius: 20,
    width: "85%",
    height: 38,
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: "#F97B7D",
    width: 38,
    height: 38,
    borderRadius: 20,
    padding: 9,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
