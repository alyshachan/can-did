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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeView">
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={({ navigation }) => ({
            title: "FRIENDS",
            headerStyle: {
              backgroundColor: "#749BBF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={({ navigation }) => ({
            title: "TO-DO'S",
            headerStyle: {
              backgroundColor: "#749BBF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
        <Stack.Screen
          name="NewTaskScreen"
          component={NewTaskScreen}
          options={({ navigation }) => ({
            title: "ADD TASK",
            headerStyle: {
              backgroundColor: "#749BBF",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
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
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ConfirmPhoto" component={ConfirmPhoto} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        <Stack.Screen
          name="WelcomeView"
          component={WelcomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInUpView"
          component={SignInUpView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccountView"
          component={CreateAccountView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Xstack: {
    flexDirection: "row",
    alignItems: "center",
  },
});
