import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export function NoteList() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  return (
    <View style={styles.container}>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Text style={styles.noteText} key={note.id}>{`${index + 1}. ${
            note.text
          }`}</Text>
        ))
      ) : (
        <Text>No notes to display.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  noteText: {
    margin: 4,
  },
});
