import { makeStyles } from "@material-ui/core";
import { Grid, Avatar } from "@material-ui/core";
import gravatar from "../gravatar/gravatar";
import MessageField from "./MessageField";
import { useState } from "react";

const useStales = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

export default function ChatInput({ name }) {
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
              message={message}
              setMessage={setMessage}
              name={name}
            />
          </Grid>
          <Grid item xs={1}>c</Grid>
        </Grid>
      </div>
      <gravatar />
    </>
  );
}
