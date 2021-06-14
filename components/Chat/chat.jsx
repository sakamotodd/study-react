import { makeStyles } from "@material-ui/core";
import ChatList from "./ChatList";
import ChatInput from "./Input/ChatInput";

const useStales = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});
export default function Chat({ name }) {
  const classes = useStales();

  return (
    <>
      <div className={classes.root}>
        <ChatList />
        <ChatInput name={name} />
      </div>
    </>
  );
}
