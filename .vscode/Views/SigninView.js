/*
This page allows the user to sign in to Can-Did
with their email and password

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AuthMode = {
  SignIn: "signIn",
  SignUp: "signUp",
};

const SignInUpView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState(AuthMode.SignIn);
  const [isCreateAccountViewPresented, setIsCreateAccountViewPresented] =
    useState(false);

  const colorScheme = "light"; // Adjust based on your color scheme logic
  const navigation = useNavigation();

  /* Toggle between Sign In and Sign Up */
  const toggleAuthMode = () => {
    setAuthMode(
      authMode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn
    );
    if (authMode === AuthMode.SignIn) {
      navigation.navigate("CreateAccountView");
    }
  };

  /* Switch between Sign In and Sign Up text */
  const authButtonText = authMode === AuthMode.SignIn ? "Sign In" : "Sign Up";

  return (
    <View style={{ padding: 20, marginVertical: 150 }}>
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

      {/* Sign In header text */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#749BBF",
          alignSelf: "center",
          margin: 10,
        }}
      >
        Sign In
      </Text>

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
        autoCapitalize="none"
        autoCorrect={false}
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

      {/* Sign In button */}
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#749BBF",
          marginTop: 16,
        }}
        onPress={() => {
          // Add authentication logic here
          // For this example, just log the email and password
          console.log(`Email: ${email}, Password: ${password}`);
        }}
      >
        <Text
          onPress={() => navigation.navigate("WelcomePage")}
          style={{
            color: "white",
            textAlign: "center",
            padding: 5,
            fontSize: 18,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Switch to CreateAccount button */}
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("CreateAccountView")}
      >
        <Text
          style={{
            color: "#749BBF",
            padding: 10,
            textAlign: "center",
          }}
        >
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>

      {/* Render CreateAccountView if isCreateAccountViewPresented is true */}
      {isCreateAccountViewPresented}
    </View>
  );
};

export default SignInUpView;
