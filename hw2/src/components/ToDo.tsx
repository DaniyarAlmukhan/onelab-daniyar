import {
  TextField,
  Button,
  Container,
  List,
  FormControl,
  Typography,
} from "@mui/material";
import ToDoItem from "./ToDoItem";
import { Task } from "../../types";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Do homework",
    isDone: false,
  },
  {
    id: 2,
    title: "Chalit Angular",
    isDone: false,
  },
  {
    id: 3,
    title: "Chillit",
    isDone: true,
  },
];

const ToDo = () => {
  const [id, setId] = useState<number>(4);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({
    title: "",
    isDone: false,
  });
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(initialTasks);
    setFilteredTasks(initialTasks);
  }, []);

  const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!task.title.length) {
      return;
    }
    setTasks([...tasks, { ...task, id }]);
    setFilteredTasks([...tasks, { ...task, id }]);
    setTask({ ...task, title: "" });
    setId(id + 1);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => id !== task.id));
    setFilteredTasks(tasks.filter((task) => id !== task.id));
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilteredTasks(tasks.filter((task) => task.title.includes(value)));
  };

  const handleTaskIsDone = (id: number) => {
    const taskId = tasks.findIndex((task) => task.id === id);
    setTasks([
      ...tasks.slice(0, taskId),
      { ...tasks[taskId], isDone: true },
      ...tasks.slice(taskId + 1),
    ]);
    setFilteredTasks([
      ...tasks.slice(0, taskId),
      { ...tasks[taskId], isDone: true },
      ...tasks.slice(taskId + 1),
    ]);
  };

  return (
    <StyledContainer maxWidth={"sm"}>
      <Header>To Do List</Header>
      <StyledTextField
        placeholder="Search..."
        fullWidth
        onChange={handleFilter}
      ></StyledTextField>

      <StyledFormControl>
        <StyledTextField
          placeholder="Add Task"
          fullWidth
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        ></StyledTextField>
        <AddButton onClick={handleAddTask}>➕</AddButton>
      </StyledFormControl>

      <List>
        {filteredTasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onDone={handleTaskIsDone}
          />
        ))}
      </List>
    </StyledContainer>
  );
};

const StyledTextField = styled(TextField)({
  marginBottom: 25,
});

const StyledFormControl = styled(FormControl)({
  position: "relative",
  width: "100%",
});

const AddButton = styled(Button)({
  position: "absolute",
  height: 56,
  right: 0,
  top: 0,
  background: "#ff4e00",
  "&:hover": {
    background: "#ff8c00",
  },
});

const Header = styled(Typography)({
  fontSize: 48,
  background: "-webkit-linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  fontWeight: 700,
});

const StyledContainer = styled(Container)({
  marginTop: "20px",
  background: "white",
  borderRadius: "15px",
});

export default ToDo;
