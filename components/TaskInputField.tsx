import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ITaskInputField {
  addTask: (task: string) => void;
}

export default function TaskInputField(props: ITaskInputField) {
  const [task, setTask] = useState<string | null>();

  const handleAddTask = (value: string) => {
    props.addTask(value);
    setTask(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.inputField}
        value={task!}
        onChangeText={(text) => setTask(text)}
        placeholder={"Write a Task"}
        placeholderTextColor={"#fff"}
      />
      <TouchableOpacity onPress={() => handleAddTask(task!)}>
        <View style={styles.button}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    backgroundColor: "#3e3364",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 20,
  },
  inputField: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
