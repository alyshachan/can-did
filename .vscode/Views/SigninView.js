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
    <View style={{ padding: 20, marginVertical: 150 }}>
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
