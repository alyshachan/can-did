/*
This page creates a custom button with text, what to
do when pressed, icon, and icon color

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer

References:
Youtube - Creating custom button
https://www.youtube.com/watch?v=9EoKurp6V0I
*/
import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

/* Setting button parameters */
export default function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={"black"} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

/* Styles for imported elements*/
const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
});
