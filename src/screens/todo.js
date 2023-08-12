/*
This page shows user's to-do list. Each task is created
and imported from the NewTask page, and displayed on this
to-do list with a checkbox to mark off when tasks are
completed

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ToDoOptionsModal from "../components/ToDoOptionsModal";
import { FontAwesome } from "@expo/vector-icons";

const ToDoList = ({ route }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const navigation = useNavigation();

  /* Selected Option for Add New Task or Camera*/
  useEffect(() => {
    if (selectedOption !== null) {
      handleModalAction(); // Handle the modal action
      setSelectedOption(null); // Reset selectedOption
    }
  }, [selectedOption]);

  /* Add task to to-do list from new task page*/
  useEffect(() => {
    if (route.params && route.params.newTask) {
      setTodos([...todos, route.params.newTask]);
    }
  }, [route.params]);

  /* Toggle checkbox selection checkmark*/
  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const renderTodoItem = ({ item, index }) => {
    return (
      /* Checkbox List and Task Name*/
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={() => handleToggleTodo(index)}
      >
        {item.checked ? (
          <Feather
            name="check-square"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
        ) : (
          <Feather
            name="square"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
        )}
        <Text style={styles.listItem}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  /* Plus button displays create task and camera option and blues background */
  const handlePlusClick = () => {
    setShowModal(true);
    setSelectedOption(null);
  };

  /* Display Add Task and Camera options */
  const handleModalAction = () => {
    if (selectedOption === "uploadPhoto") {
      navigation.navigate("Camera");
      setShowModal(false);
    } else if (selectedOption === "addNewTask") {
      navigation.navigate("NewTaskScreen");
      setShowModal(false);
    }
  };

  /* Have selected option navigate to selected page */
  useEffect(() => {
    if (selectedOption) {
      handleModalAction();
      setSelectedOption(null);
    }
  }, [selectedOption]);

  return (
    <View style={styles.container}>
      {/* Checkbox List Display */}
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Plus Button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handlePlusClick} style={styles.addButton}>
          <FontAwesome name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Plus Button Options: Add Task and Camera */}
      <ToDoOptionsModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onUploadPhoto={() => setSelectedOption("uploadPhoto")}
        onAddNewTask={() => setSelectedOption("addNewTask")}
      />
    </View>
  );
};

/* Styles for imported elements*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  goBackButton: {
    padding: 10,
    marginRight: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  listItem: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#749BBF",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
    height: "100%",
    borderRadius: 15,
  },
});

export default ToDoList;
