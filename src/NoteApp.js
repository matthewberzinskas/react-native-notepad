import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NoteList } from "./components/NoteList";
import { AddNote } from "./components/AddNote";

export const NoteApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NotePad App</Text>
      <AddNote />
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
