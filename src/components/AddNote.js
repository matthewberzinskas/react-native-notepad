import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export const AddNote = ({ navigation }) => {
  //console.log(navigation);

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
  fab: {
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0,
  },
});
