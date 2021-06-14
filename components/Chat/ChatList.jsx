import { makeStyles } from "@material-ui/core";

const useStales = makeStyles({
  root: {
    gridRow: 1,
  },
});

export default function ChatList() {
    const classes = useStales();

  return (
    <>
      <div className={classes.root}>ChatList</div>
    </>
  );
}
