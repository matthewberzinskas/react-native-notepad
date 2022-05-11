import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar } from "react-native";
import { NoteList } from "../components/NoteList";
import { AddNote } from "../components/AddNote";

export default function HomeScreen({ navigation }) {
  //console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.title}>Your notes...</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <NoteList />
      </View>
      <View style={[styles.box, styles.box3]}>
        <AddNote navigation={navigation} />
      </View>
    </View>
  );
}

var { height } = Dimensions.get("window");

var box_count = 3;
var box_height = height / box_count;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    height: box_height,
  },
  //header
  box1: {
    flex: 1,
    backgroundColor: "#2196F3",
  },
  //content
  box2: {
    flex: 10,
    backgroundColor: "#8BC34A",
  },
  //footer
  box3: {
    flex: 2,
    backgroundColor: "#e3aa1a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
