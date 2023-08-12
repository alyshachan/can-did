//
//  welcomeView.Js
//  can-did
//
//  Created by Shane Zhu on 7/24/23.
//

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function WelcomeView({ navigation }) {
  return (
    <View>
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
          color: "blue",
          textShadowColor: "gray",
          textShadowRadius: 2,
          textShadowOffset: { width: 0, height: 2 },
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
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("SignInUpView")}
      >
        <View style={{ opacity: 0 }}>
          {/* Empty view to handle navigation */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeView;
