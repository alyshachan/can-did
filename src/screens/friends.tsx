/*
This page shows the Friends feed, displaying you and all
your friends' posts and captions.

Authors: Alysha Chan, Shane Zhu, Ibukun Adeloye, Isabella DeBoer
*/
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { posts } from "../components/posts";
import React from "react";

const Friends = ({ username }) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      {/* Loop through all posts through posts.js */}
      {posts.map((post) => (
        <View style={styles.YstackFull} key={post.id}>
          {/* Display photo */}
          <View style={styles.Xstack}>
            <Image style={styles.image} source={{ uri: post.photo }} />

            {/* Display username, time of completion, caption, add comment */}
            <View style={styles.Ystack}>
              <Text style={styles.usernameText}>@{post.author.username}</Text>
              <Text style={styles.timeText}>{post.uploadTime}</Text>
              <Text style={styles.captionText}>{post.caption}</Text>
              <Text style={styles.commentText}>Add a comment...</Text>
            </View>
          </View>

          {/* Divider between posts */}
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 15,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};
export default Friends;

/* Styles for imported elements*/
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#749BBF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  Xstack: {
    flexDirection: "row",
    alignItems: "center",
  },
  Ystack: {
    flexDirection: "column",
    margin: 10,
    height: 215,
  },
  YstackFull: {
    flexDirection: "column",
    margin: 10,
  },
  image: {
    width: 155,
    height: 215,
    borderRadius: 25,
  },
  usernameText: {
    fontSize: 22,
    paddingTop: 10,
  },
  timeText: {
    fontSize: 12,
    color: "gray",
    opacity: 50,
  },
  commentText: {
    fontSize: 12,
    color: "gray",
    opacity: 50,
  },
  captionText: {
    paddingVertical: 50,
  },
});
