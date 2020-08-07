import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Nav } from "../commons/Nav";
import { connect } from "react-redux";
import {
  getSections,
  toggleTodoState,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../redux/data";
import { ProjectCard, TodoForm } from "../components";

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export const ProjectScreen = connect(mapStateToProps, {
  toggleTodoState,
  addTodo,
  deleteTodo,
  updateTodo,
})(({ route, sections, toggleTodoState, addTodo, deleteTodo, updateTodo }) => {
  const {
    params: { sectionID, projectID },
  } = route;

  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodoID, setEditTodoId] = useState(null);

  const { name = "404", imgUri, todos = [] } =
    sections
      .find((section) => section.id === sectionID)
      ?.projects.find((project) => project.id === projectID) || {};

  const sortedTodos = todos.sort((a, b) => {
    if (a.done === b.done) return 0;
    if (a.done) return 1;
    if (b.done) return -1;
  });

  const submitTodoForm = (todoText) => {
    const args = {
      sectionID,
      projectID,
      todoText,
    };
    if (isEditMode) {
      updateTodo({ ...args, todoID: editTodoID });
      setIsEditMode(false);
      setEditTodoId(null);
    } else {
      addTodo(args);
    }
  };

  const startEditTodo = (id) => {
    setIsEditMode(true);
    setEditTodoId(id);
  };

  const handleTodoLongPress = (todoID) => {
    Alert.alert("What you want to do?", "", [
      { text: "cancel", style: "cancel" },
      {
        text: "Edit",
        onPress: () => startEditTodo(todoID),
      },
      {
        text: "Delete",
        onPress: () => deleteTodo({ sectionID, projectID, todoID }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Nav back={true} />
      <View style={styles.projectContent}>
        <ProjectCard
          title={name}
          image={imgUri}
          style={styles.card}
          clickable={false}
        />
        <Text>{isEditMode ? "is edit" : "is create"}</Text>
        <TodoForm onSubmit={submitTodoForm} />

        <FlatList
          contentContainerStyle={styles.list}
          data={sortedTodos}
          renderItem={({ item }) => (
            <View style={styles.todoItemWrapper}>
              <TouchableOpacity
                onPress={() =>
                  toggleTodoState({
                    sectionID,
                    projectID,
                    todoID: item.id,
                  })
                }
                onLongPress={() => handleTodoLongPress(item.id)}
              >
                <View
                  style={[styles.todoItem, { opacity: item.done ? 0.5 : 1 }]}
                >
                  <Text>{item.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  projectContent: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  card: {
    width: "100%",
    height: 165,
  },
  list: {
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: "#eeeeee",
    padding: 15,
    paddingBottom: 7,
  },
  todoItemWrapper: {
    elevation: 4,
    backgroundColor: "#eeeeee",
    marginBottom: 8,
    borderRadius: 8,
  },
  todoItem: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
});
