import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import gravatar from "../gravatar/gravatar";
import { useEffect, useRef } from "react";

const useStyles = makeStyles({
  inline: {
    display: "inline",
  },
});

export function DbRoupMessageList({ name, message, isListItem }) {
  const ref = useRef(null);
  const classes = useStyles();
  const avatar = gravatar(name);

  useEffect(() => {
    if (isListItem) {
      ref.current.scrollIntoView({behavior: "smooth"});
    }
  }, [isListItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {message}
          </Typography>
        }
      />
    </ListItem>
  );
}
