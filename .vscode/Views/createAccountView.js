//
//  CreateAccount View.Js
//  can-did
//
//  Created by Shane Zhu on 7/25/23.
//

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateAccountView = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#F2F2F7", padding: 16 }}>
      <View
        style={{
          paddingVertical: 30,
          maxWidth: "100%",
          backgroundColor: "linear-gradient(to right, blue, purple)",
          borderRadius: 10,
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={{
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 26,
            marginVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={{
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 26,
            marginVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={{
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 26,
            marginVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={{
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 26,
            marginVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={{
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 26,
            marginVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          marginTop: 20,
          padding: 10,
          paddingHorizontal: 40,
        }}
        onPress={() => {
          console.log(`First Name: ${firstName}`);
          console.log(`Last Name: ${lastName}`);
          console.log(`Email: ${email}`);
          console.log(`Password: ${password}`);
          console.log(`Confirm Password: ${confirmPassword}`);
        }}
      >
        <Text
          onPress={() => navigation.navigate("WelcomePage")}
          style={{ color: "white", fontSize: 18, textAlign: "center" }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default CreateAccountView;