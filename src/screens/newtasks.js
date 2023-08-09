import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleAddTask = () => {
    console.log("Navigating to ToDoList screen");
    const newTask = { text: taskName, checked: false };
    navigation.navigate('TodoList', { newTask });
    
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
      <TextInput
        style={styles.input}
        placeholder="Priority Level"
        value={priority}
        onChangeText={setPriority}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={{ color: 'white' }}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#749BBF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default NewTaskScreen;
