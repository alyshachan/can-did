/*
This page displays the plus button options on the ToDoList page:
Add New Task and Camera

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer, Simon Sturmer
*/
import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ToDoOptionsModal = ({
  isVisible,
  onClose,
  onUploadPhoto,
  onAddNewTask,
}) => {
  return (
    /* Blue background display */
    <Modal visible={isVisible} transparent animationType="fade">
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContentContainer}>
          <View style={styles.modalContent}>
            {/* Camera button */}
            <TouchableOpacity
              style={styles.optionButton}
              onPress={onUploadPhoto}
            >
              <FontAwesome name="camera" size={35} color="white" />
              <Text style={styles.optionText}>Upload Photo</Text>
            </TouchableOpacity>

            {/* Add new task button */}
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.optionButton}
              onPress={onAddNewTask}
            >
              <FontAwesome name="calendar-check-o" size={35} color="white" />
              <Text style={styles.optionText}>Add New Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

/* Styles for imported elements*/
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "#749BBFCC",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContentContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  modalContent: {
    backgroundColor: "#749BBF",
    borderTopLeftRadius: 400, // Adjust this value to control the curvature of the semicircle
    borderTopRightRadius: 400, // Adjust this value to control the curvature of the semicircle
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "25%", // Adjust this value to control the height of the modal
  },
  optionButton: {
    alignItems: "center",
  },
  optionText: {
    color: "white",
    marginTop: 6,
  },
  separator: {
    width: 6, // Width of the white line
    height: "100%", // Height of the white line
    backgroundColor: "white", // White color for the line
  },
});

export default ToDoOptionsModal;
