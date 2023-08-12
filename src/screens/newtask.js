import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const NewTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleAddTask = () => {
    const newTask = { text: taskName, checked: false };
    navigation.navigate("ToDoList", { newTask });
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <TouchableOpacity
        style={[
          styles.input,
          styles.pickerInput, // Apply specific styles for picker input
        ]}
        onPress={togglePicker}
      >
        <Text>{priority || "Select Priority"}</Text>
      </TouchableOpacity>
      {showPicker && (
        <Picker
          selectedValue={priority}
          onValueChange={(itemValue) => {
            setPriority(itemValue);
            setShowPicker(false); // Close the picker after selection
          }}
          style={styles.picker}
        >
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Low" value="low" />
        </Picker>
      )}
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={{ color: "white"}}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  pickerInput: {
    justifyContent: "center",
  },
  picker: {
    height: 40,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  addButton: {
    backgroundColor: "#749BBF",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 200,
  },
});

export default NewTaskScreen;
