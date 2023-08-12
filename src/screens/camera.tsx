/*
This page shows the camera view or allows users to upload an image
from their photo gallery to be posted on Can-Did.

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer

References:
StackOverflow - Camera and Gallery Implementation
https://stackoverflow.com/questions/65931243/how-to-grant-camera-permission-in-react-native-expo-app-android
*/
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import Button from "../components/button";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";

/* Remove log notifications to be displayed*/
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

/* Setting up camera and settings permissions */
export let capture = [];
export default function Add({ picture }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const navigation = useNavigation();

  /* Request camera and gallery permission */
  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestPermissionsAsync();
    setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);
    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };

  /* Display camera and gallery permission */
  useEffect(() => {
    permisionFunction();
  }, []);

  /* Take picture and send to ConfirmPhoto page */
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      // setImageUri(data.uri);
      capture = data.uri;
      navigation.navigate("ConfirmPhoto");
    }
  };

  /* Select image from gallery and send to ConfirmPhoto page */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [31, 43],
      quality: 1,
    });
    console.log(result);
    capture = result.uri;
    navigation.navigate("ConfirmPhoto");
  };

  return (
    <View style={styles.container}>
      {/* Camera View */}
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"31:43"}
        />
      </View>
      {/* Take picture with camera Button */}
      <Button
        title={"Take Picture"}
        onPress={takePicture}
        icon={"camera"}
        color={"white"}
      />
      {/* Select image from gallery Button */}
      <Button
        title={"Gallery"}
        onPress={pickImage}
        icon={"attachment"}
        color={"white"}
      />
      {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
    </View>
  );
}

/* Styles for imported elements*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 31 / 43,
  },
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#749BBF",
    marginHorizontal: 130,
    marginBottom: 30,
  },
});
