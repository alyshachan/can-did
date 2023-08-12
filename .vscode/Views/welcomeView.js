//
//  welcomeView.Js
//  can-did
//
//  Created by Shane Zhu on 7/24/23.
//

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function WelcomeView({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // Center content vertically
      }}
      onPress={() => navigation.navigate("SignInUpView")}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200, resizeMode: "contain" }}
          source={{
            uri: "https://i.ibb.co/9q0rbZZ/Candid-Logo.png",
          }}
        />
        <Text
          style={{
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 40,
            color: "black",
            textShadowColor: "gray",
            textShadowRadius: 2,
            textShadowOffset: { width: 0, height: 2 },
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "HelveticaNeue-CondensedBlack",
            fontSize: 60,
            color: "black",
            textShadowColor: "#749BBF",
            textShadowRadius: 2,
            textShadowOffset: { width: 0, height: 3 },
          }}
        >
          CANDID
        </Text>
        <Text
          style={{
            fontFamily: "HelveticaNeue-Medium",
            fontSize: 18,
            color: "gray",
            padding: 10,
          }}
        >
          Tap anywhere to begin
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default WelcomeView;

