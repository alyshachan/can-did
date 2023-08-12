/*
This page shows after photo is confirmed and before photo is
posted publiclly to Friends. Users select their completed task,
and have the option to add a caption and post privately.

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Switch,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { capture } from "./camera";
import { FontAwesome } from "@expo/vector-icons";

const UploadPhoto = ({ picture }) => {
  const [selected, setSelected] = React.useState("");
  const [caption, setCaption] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();

  /* Navigation handlers to Friends */
  const handleFriends = () => {
    navigation.navigate("Friends");
  };

  /* Data for task selection */
  const data = [
    { key: "1", value: "Walk the dog" },
    { key: "2", value: "study physics" },
    { key: "3", value: "Meal Prep" },
    { key: "4", value: "badminton practice" },
    { key: "5", value: "Finish SEEDS project" },
    { key: "6", value: "PHYSICS EXAM" },
    { key: "7", value: "clean room" },
  ];

  return (
    <View>
      {/* Selected image display and confirmation text */}
      <Image style={styles.image} source={{ uri: capture }} />

      {/* Task Selection */}
      <View style={styles.list}>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />

        {/* Caption Input */}
        <Text style={styles.captionText}>Caption</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          value={caption}
          onChangeText={setCaption}
        />

        {/* Switch for private post */}
        <View style={styles.Xstack}>
          <Text style={styles.captionText}>Post Privately</Text>
          <FontAwesome
            name="lock"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>

        {/* Post to Friends button */}
        <TouchableOpacity onPress={handleFriends} style={styles.confirmButton}>
          <Text style={styles.buttonText}>Yes, share it!</Text>
        </TouchableOpacity>
      </View>
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
  list: {
    width: 232.5,
    alignSelf: "center",
    paddingVertical: 20,
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  captionText: {
    marginTop: 10,
  },
  switch: {
    marginLeft: 90,
  },
  Xstack: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
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
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default UploadPhoto;
