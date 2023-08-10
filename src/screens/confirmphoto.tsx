import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { capture } from "./camera";

const ConfirmPhoto = ({ confirmation }) => {
  const navigation = useNavigation();

  const handleUploadPhoto = () => {
    navigation.navigate("UploadPhoto"); // Navigate to the ToDoList screen
  };

  const handleRetakeTask = () => {
    navigation.navigate("Camera"); // Navigate to the ToDoList screen
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: capture }} />
      <Text style={styles.text}>CONFIRM PICTURE?</Text>
      <TouchableOpacity
        onPress={handleUploadPhoto}
        style={styles.confirmButton}
      >
        <Text style={styles.buttonText}>Yes, share it!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRetakeTask} style={styles.retakeButton}>
        <Text style={styles.buttonText}>No, retake it.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 232.5,
    height: 322.5,
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 32,
    paddingTop: 10,
    textAlign: "center",
  },
  confirmButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#749BBF",
    borderRadius: 5,
    width: 232.5,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  retakeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#B3B3B3",
    borderRadius: 5,
    width: 232.5,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ConfirmPhoto;
