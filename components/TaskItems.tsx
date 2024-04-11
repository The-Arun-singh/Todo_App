import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ITaskListProps {
  index: number;
  task: string;
  deleteTask: () => void;
}

export default function TaskItem(props: ITaskListProps) {
  const { index, task, deleteTask } = props;
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.task}>{task}</Text>
        <TouchableOpacity onPress={() => deleteTask()}>
          <MaterialIcons
            style={styles.delete}
            name="delete"
            size={18}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: "#3e3364",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  index: {
    color: "#fff",
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: "3e3364",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: "#fff",
    width: "90%",
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
});
