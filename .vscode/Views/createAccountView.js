/*
This page allows the user to create an account with
their name, email, and password.

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/

import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateAccountView = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F2F2F7",
        padding: 16,
        marginVertical: 80,
      }}
    >
      {/* Can-Did Logo */}
      <Image
        source={{
          uri: "https://i.ibb.co/9q0rbZZ/Candid-Logo.png",
        }}
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />

      {/* Create Account Header */}
      <View
        style={{
          maxWidth: "100%",
          backgroundColor: "linear-gradient(to right, blue, purple)",
          borderRadius: 10,
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        {/* Create Account Header Text */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#749BBF",
            alignSelf: "center",
            margin: 10,
          }}
        >
          Create Account
        </Text>
      </View>
      <View>
        {/* First name text input */}
        <TextInput
          style={{
            padding: 10,
            borderRadius: 8,
            borderColor: "gray",
            borderWidth: 1,
            marginVertical: 8,
          }}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        {/* Last name text input */}
        <TextInput
          style={{
            padding: 10,
            borderRadius: 8,
            borderColor: "gray",
            borderWidth: 1,
            marginVertical: 8,
          }}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        {/* Email text input */}
        <TextInput
          style={{
            padding: 10,
            borderRadius: 8,
            borderColor: "gray",
            borderWidth: 1,
            marginVertical: 8,
          }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {/* Password text input */}
        <TextInput
          style={{
            padding: 10,
            borderRadius: 8,
            borderColor: "gray",
            borderWidth: 1,
            marginVertical: 8,
          }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* Confirm password text input */}
        <TextInput
          style={{
            padding: 10,
            borderRadius: 8,
            borderColor: "gray",
            borderWidth: 1,
            marginVertical: 8,
          }}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      {/* Console Log for text input */}
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#749BBF",
          marginTop: 16,
        }}
        onPress={() => {
          console.log(`First Name: ${firstName}`);
          console.log(`Last Name: ${lastName}`);
          console.log(`Email: ${email}`);
          console.log(`Password: ${password}`);
          console.log(`Confirm Password: ${confirmPassword}`);
        }}
      >
        {/* Create Account button */}
        <Text
          onPress={() => navigation.navigate("WelcomePage")}
          style={{
            color: "white",
            textAlign: "center",
            padding: 5,
            fontSize: 18,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      {/* Switch to SignUp button */}
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("SignInUpView")}
      >
        <Text
          style={{
            color: "#749BBF",
            padding: 10,
            textAlign: "center",
          }}
        >
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default CreateAccountView;
