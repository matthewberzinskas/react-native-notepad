import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function AddNoteScreen() {
  const [text, onChangeText] = useState("");
  const [height, setHeight] = useState(40);

  return (
    <View>
      <Text>AddNote Placeholder</Text>
      <TextInput
        placeholder="Your Placeholder"
        onChangeText={onChangeText}
        style={[styles.input, { height: height }]}
        editable
        multiline
        value={text}
        onContentSizeChange={(e) => setHeight(e.nativeEvent.contentSize.height)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
