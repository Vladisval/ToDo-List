import { TodoModel } from "../model/types.ts";
import { Box, Checkbox } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface Props {
  todo: TodoModel;
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "dark",
    minHeight: "8vh",
    border: "1px solid transparent",
    boxShadow: "0 4px 2px -2px grey",
    marginBottom: "5px",
    fontSize: "20px",
    fontFamily: "system-ui",
  },
  task: {
    flexGrow: 1,
    color: "white",
  },
  done: {
    textDecoration: "line-through",
    color: "gray",
    flexGrow: 1,
  },
}));

const ToDoItem = ({ todo }: Props) => {
  const classes = useStyles();
  // const [isDone, setIsDone] = useState<boolean>(false);
  // const toggle = () => {
  //   setIsDone((prevState) => !prevState);
  // };

  return (
    <Box className={classes.root}>
      <Checkbox color="default" checked={!todo.completed} />
      <Box className={!todo.completed ? classes.done : classes.task}>
        {todo.id}. {todo.title}
      </Box>
      <CreateOutlinedIcon sx={{ marginRight: "1rem" }} />
      <DeleteOutlineOutlinedIcon />
    </Box>
  );
};

export default ToDoItem;
