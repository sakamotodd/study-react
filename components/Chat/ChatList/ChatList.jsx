import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { messageRef } from "../../../firebase";
import List from "@material-ui/core/List";
import { DbRoupMessageList } from "./DbRoupMessageList";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: "100%",
    overflow: "auto",
  },
});

export default function ChatList() {
  const [dbMessage, setDbMessage] = useState([]);
  const classes = useStyles();

  //messageRef単体だと無限ループが起きるため、useEffectで一回だけ処理を実行させる必要がある。
  //データが一件もなかった場合、" const entries = Object.entries(messages);"でエラーが起きる
  //nullの場合の処理を追加する必要gある
  // <ListItem alignItems="flex-start"></ListItem>

  useEffect(() => {
    messageRef
      .orderByKey()
      .limitToLast(15)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const dbResult = entries.map((dbData) => {
          const [key, otherData] = dbData;
          return { key, ...otherData };
        });
        setDbMessage(dbResult);
      });
  }, []);

  const length = dbMessage.length;

  return (
    <>
      <List className={classes.root}>
        {dbMessage.map(({ key, message, name }, index) => {
          const isListItem = length === index + 1;
          return (
            <DbRoupMessageList
              key={key}
              name={name}
              message={message}
              isListItem={isListItem}
            />
          );
        })}
      </List>
    </>
  );
}
