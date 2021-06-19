import { makeStyles } from "@material-ui/core";
import ChatList from "./ChatList/ChatList";
import ChatInput from "./ChatInput/ChatInput";

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
