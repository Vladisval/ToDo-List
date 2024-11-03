import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useInput } from "../../../features/filters/model/useInput.ts";
import { todoApi } from "../model/api.ts";
import { TodoModel } from "../model/types.ts";

export default function CreateToDo() {
  const [open, setOpen] = React.useState(false);
  const input = useInput();

  const [createTodo] = todoApi.useCreateTodoMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    input.onChange({ target: { value: "" } });
  };

  const handleCreate = async () => {
    await createTodo({ title: input.value, completed: false } as TodoModel);
    handleClose();
  };
  return (
    <React.Fragment>
      <Fab
        color="default"
        aria-label="add"
        sx={{ position: "fixed", bottom: "2rem", right: "20%" }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <Dialog maxWidth="md" open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>Create your ToDo</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="todo"
            label="Create ToDo"
            fullWidth
            variant="standard"
            {...input}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
