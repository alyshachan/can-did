import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomePage = ({ username, activities }) => {
  const navigation = useNavigation();

  const handleGoToTodoList = () => {
    navigation.navigate("ToDoList"); // Navigate to the ToDoList screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, Whitney!</Text>
      <Text style={styles.subHeading}>Activities for today:</Text>
      <FlatList
        data={activities}
        renderItem={({ item }) => <Text style={styles.activity}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity onPress={handleGoToTodoList} style={styles.button}>
        <Text style={styles.buttonText}>Go to ToDoList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 70,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 10,
  },
  activity: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#749BBF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
