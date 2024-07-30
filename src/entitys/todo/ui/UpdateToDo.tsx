import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TodoModel } from "../model/types.ts";
import { todoApi } from "../model/api.ts";

interface BaseModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  data: TodoModel;
}

export default function UpdateToDo({
  data: todo,
  onClose,
  isOpen,
}: BaseModalProps) {
  const [textValue, setTextValue] = useState(todo.title);
  const [updateTitle] = todoApi.useUpdateTitleMutation();

  const handleUpdate = async () => {
    await updateTitle({ ...todo, title: textValue, id: todo.id } as TodoModel);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogContent>
          <DialogContentText>Update your ToDo</DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="titleTodo"
            fullWidth
            variant="standard"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
