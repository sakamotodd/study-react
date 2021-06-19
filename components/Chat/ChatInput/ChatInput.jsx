import { makeStyles } from "@material-ui/core";
import { Grid, Avatar } from "@material-ui/core";
import { MessageSubmitButton } from "./MessageSubmitButton";
import gravatar from "../gravatar/gravatar";
import MessageField from "./MessageField";
import { useRef, useState } from "react";

const useStales = makeStyles({
  root: {
    gridRow: 2,
  },
});

export default function ChatInput({ name }) {
  const inputRef = useRef(null);
  const [message, setMessage] = useState();
  const classes = useStales();
  const avatar = gravatar(name);

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={1}>
            <Avatar src={avatar} />
          </Grid>
          <Grid item xs={10}>
            <MessageField
              inputRef={inputRef}
              message={message}
              setMessage={setMessage}
              name={name}
            />
          </Grid>
          <Grid item xs={1}>
            <MessageSubmitButton
              inputRef={inputRef}
              name={name}
              message={message}
              setMessage={setMessage}
            />
          </Grid>
        </Grid>
      </div>
      <gravatar />
    </>
  );
}
