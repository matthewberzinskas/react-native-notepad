import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../reducers/noteSlice";

export default function AddNoteScreen({ navigation }) {
  const [text, onChangeText] = useState("");
  const [height, setHeight] = useState(40);

  const dispatch = useDispatch();

  const handleSumbit = () => {
    console.log("Adding note");
    dispatch(addNote(text));
    onChangeText("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Enter note details:</Text>
      <View>
        <TextInput
          placeholder="Your Placeholder"
          onChangeText={onChangeText}
          style={[styles.input, { height: height }]}
          editable
          multiline
          value={text}
          onContentSizeChange={(e) =>
            setHeight(e.nativeEvent.contentSize.height)
          }
        />
        <Button title="Add Note" onPress={handleSumbit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
    backgroundColor: "lightgreen",
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
