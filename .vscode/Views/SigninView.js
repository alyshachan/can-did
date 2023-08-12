//
//  Signin:up View.Js
//  can-did
//
//  Created by Shane Zhu on 7/24/23.
//

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

  const toggleAuthMode = () => {
    setAuthMode(
      authMode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn
    );
    if (authMode === AuthMode.SignIn) {
      navigation.navigate("CreateAccountView");
    }
  };

  const authButtonText = authMode === AuthMode.SignIn ? "Sign In" : "Sign Up";

  return (
    <View style={{ padding: 16 }}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png",
        }} // Replace with the actual path to the "globe" image
        style={{
          width: 60,
          height: 60,
          tintColor: colorScheme === "dark" ? "white" : "blue",
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colorScheme === "dark" ? "white" : "blue",
        }}
      >
        {authButtonText}
      </Text>
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
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: colorScheme === "dark" ? "blue" : "blue",
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
          style={{ color: "white", textAlign: "center", padding: 10 }}
        >
          {authButtonText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }} onPress={toggleAuthMode}>
        <Text
          style={{
            color: colorScheme === "dark" ? "white" : "blue",
            padding: 10,
            textAlign: "center",
          }}
        >
          {authMode === AuthMode.SignIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Text>
      </TouchableOpacity>
      {/* Render CreateAccountView if isCreateAccountViewPresented is true */}
      {isCreateAccountViewPresented}
    </View>
  );
};

export default SignInUpView;