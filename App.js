/*
This page manages the header navigation and page navigations.

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ToDoList from "./src/screens/todo";
import Friends from "./src/screens/friends";
import NewTaskScreen from "./src/screens/newtask";
import Camera from "./src/screens/camera";
import ConfirmPhoto from "./src/screens/confirmphoto";
import UploadPhoto from "./src/screens/uploadphoto";
import WelcomePage from "./src/screens/welcome";
import WelcomeView from "./.vscode/Views/welcomeView";
import SignInUpView from "./.vscode/Views/SigninView";
import CreateAccountView from "./.vscode/Views/createAccountView";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  /* Use custom font */
  const [fontsLoaded] = useFonts({
    "GreatVibes-Regular": require("./assets/GreatVibes-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      {/* welcome.js navigation */}
      <Stack.Navigator initialRouteName="WelcomeView">
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        {/* friends.tsx naviation */}
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={({ navigation }) => ({
            title: "FRIENDS",
            /* Header color to blue, bold font */
            headerStyle: {
              backgroundColor: "#749BBF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            /* Friends, ToDoList, NewTask top navigation */
            headerRight: () => (
              <View style={styles.Xstack}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Friends")}
                >
                  <FontAwesome name="user" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ToDoList")}
                >
                  <FontAwesome
                    name="bars"
                    size={20}
                    color="black"
                    marginLeft={20}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NewTaskScreen")}
                >
                  <FontAwesome
                    name="plus"
                    size={20}
                    color="black"
                    marginLeft={20}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        {/* todo.js naviation */}
        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={({ navigation }) => ({
            title: "TO-DO'S",
            /* Header color to blue, bold font */
            headerStyle: {
              backgroundColor: "#749BBF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            /* Friends, ToDoList, NewTask top navigation */
            headerRight: () => (
              <View style={styles.Xstack}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Friends")}
                >
                  <FontAwesome name="user" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ToDoList")}
                >
                  <FontAwesome
                    name="bars"
                    size={20}
                    color="black"
                    marginLeft={20}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NewTaskScreen")}
                >
                  <FontAwesome
                    name="plus"
                    size={20}
                    color="black"
                    marginLeft={20}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        {/* newtask.js naviation */}
        <Stack.Screen
          name="NewTaskScreen"
          component={NewTaskScreen}
          options={({ navigation }) => ({
            title: "ADD TASK",
            /* Header color to blue, bold font */
            headerStyle: {
              backgroundColor: "#749BBF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            /* Friends, ToDoList, NewTask top navigation */
            headerRight: () => (
              <View style={styles.Xstack}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Friends")}
                >
                  <FontAwesome name="user" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ToDoList")}
                >
                  <FontAwesome
                    name="bars"
                    size={20}
                    color="black"
                    marginLeft={20}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NewTaskScreen")}
                >
                  <FontAwesome
                    name="plus"
                    size={20}
                    color="black"
                    marginLeft={20}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        {/* camera.tsx naviation */}
        <Stack.Screen name="Camera" component={Camera} />
        {/* confirmphoto.tsx naviation */}
        <Stack.Screen
          name="ConfirmPhoto"
          component={ConfirmPhoto}
          options={{ headerShown: false }}
        />
        {/* uploadphoto.tsx naviation */}
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{ headerShown: false }}
        />
        {/* welcomeView.js naviation */}
        <Stack.Screen
          name="WelcomeView"
          component={WelcomeView}
          options={{ headerShown: false }}
        />
        {/* SigninView.js naviation */}
        <Stack.Screen
          name="SignInUpView"
          component={SignInUpView}
          options={{ headerShown: false }}
        />
        {/* createAccountView.js naviation */}
        <Stack.Screen
          name="CreateAccountView"
          component={CreateAccountView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* Styles for imported elements*/
const styles = StyleSheet.create({
  Xstack: {
    flexDirection: "row",
    alignItems: "center",
  },
});
