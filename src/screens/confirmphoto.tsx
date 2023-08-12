/*
This page asks the user if their previous selected photo
from the Camera page is their confirmed picture to be posted.

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { capture } from "./camera";

const ConfirmPhoto = ({ confirmation }) => {
  const navigation = useNavigation();

  /* Navigation handlers to UploadPhoto or Camera page */
  const handleUploadPhoto = () => {
    navigation.navigate("UploadPhoto");
  };
  const handleRetakeTask = () => {
    navigation.navigate("Camera");
  };

  return (
    <View>
      {/* Selected image display and confirmation text */}
      <Image style={styles.image} source={{ uri: capture }} />
      <Text style={styles.text}>CONFIRM PICTURE?</Text>

      {/* Share and Retake buttons */}
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

/* Styles for imported elements*/
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
