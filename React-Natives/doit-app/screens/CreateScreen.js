import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Nav } from "../commons/Nav";
import { connect } from "react-redux";
import { addSection, getSections, addProject } from "../redux/data";

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export const CreateScreen = connect(mapStateToProps, {
  addSection,
  addProject,
})(({ addSection, addProject, navigation, sections }) => {
  const [type, setType] = useState("project");
  const [fields, setFields] = useState({
    sectionID: "",
    name: "",
    imgUri: "",
  });

  const fieldChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const isProject = type === "project";

  const handleAdd = () => {
    if (type === "section" && fields.name.trim() !== "") {
      addSection(fields.name);
      navigation.navigate("Home");
    } else if (type === "project") {
      for (let key in fields) {
        if (fields[key].trim() === "") return;
      }
      addProject(fields);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Nav back={true} create={false} />
      <Text style={styles.heading}>Create now</Text>

      <View style={styles.paddingHorizontal}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.field, styles.typeField]}
            onPress={() => setType("section")}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: type === "section" ? "bold" : "400" },
              ]}
            >
              Section
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.field, styles.typeField]}
            onPress={() => setType("project")}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: type === "project" ? "bold" : "400" },
              ]}
            >
              Project
            </Text>
          </TouchableOpacity>
        </View>

        {isProject && (
          <View style={styles.sections}>
            {sections.map(({ id, name }) => (
              <TouchableOpacity
                key={id}
                onPress={() => fieldChangeHandler("sectionID", id)}
              >
                <Text
                  style={[
                    styles.sectionTitle,
                    {
                      fontWeight: id === fields.sectionID ? "bold" : "400",
                    },
                  ]}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TextInput
          onChangeText={(val) => fieldChangeHandler("name", val)}
          placeholder="name"
          style={styles.field}
        />

        {isProject && (
          <TextInput
            onChangeText={(val) => fieldChangeHandler("imgUri", val)}
            placeholder="cover img url"
            style={styles.field}
          />
        )}

        <TouchableOpacity
          style={[styles.field, styles.btn]}
          onPress={handleAdd}
        >
          <Text style={styles.btnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
  field: {
    backgroundColor: "#eeeeee",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 8,
    textAlign: "center",
    fontSize: 18,
  },
  typeField: {
    width: "48%",
  },
  btn: {
    backgroundColor: "#F97B7D",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  sections: {
    paddingVertical: 20,
  },
  sectionTitle: {
    textAlign: "center",
  },
});
