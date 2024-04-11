import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native";
import TaskItem from "./components/TaskItems";
import TaskInputField from "./components/TaskInputField";

export default function App() {
  const [tasks, setTasks] = useState<string[] | null>([]);

  const addTask = (task: string) => {
    if (task === null) return;
    setTasks([...tasks!, task]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex: number) => {
    setTasks(tasks!.filter((value, index) => index != deleteIndex));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToDo List</Text>
      <ScrollView style={styles.scrollView}>
        {tasks &&
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem
                  index={index + 1}
                  task={task}
                  deleteTask={() => deleteTask(index)}
                />
              </View>
            );
          })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1a3c",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
