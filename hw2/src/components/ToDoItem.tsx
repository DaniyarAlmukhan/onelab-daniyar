import { Task } from "../../types";
import { ListItem, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type PropsType = {
  task: Task;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
};

const ToDoItem: React.FC<PropsType> = ({ task, onDelete, onDone }) => {
  return (
    <StyledListItem
      sx={{
        border: task.isDone ? "2px solid green" : "1px solid #dedede",
      }}
    >
      <Typography
        onClick={() => onDone(task.id!)}
        sx={{
          textDecoration: task.isDone ? "line-through" : "none",
        }}
      >
        {task.title}
      </Typography>

      <Button className="button" onClick={() => onDelete(task.id!)}>
        <DeleteIcon />
      </Button>
    </StyledListItem>
  );
};

const StyledListItem = styled(ListItem)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0px",
  borderRadius: 5,
  backgroundColor: "#ff4e00",
  backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
});

const DeleteIcon = styled(DeleteForeverIcon)({
  color: "black",
  "&:hover": {
    transform: "translateY(-5px)",
    color: "gray",
    transition: "transform 1s ease",
  },
});

export default ToDoItem;
