import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addNote } from "../reducers/noteSlice";

import { FAB } from "react-native-paper";

export const AddNote = ({ navigation }) => {
  //console.log(navigation);

  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSumbit() {
    if (text) {
      dispatch(addNote(text));
      setText("");
    } else {
      alert("Cannot add an empty note.");
    }
  }

  return (
    <FAB
      style={styles.fab}
      large
      icon="plus"
      onPress={() => navigation.navigate("Add")}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  fab: {
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0,
  },
});
