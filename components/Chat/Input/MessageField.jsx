import { TextField } from "@material-ui/core";
import { useState } from "react";
import { pushMessage } from "../../../firebase";


export default function MessageField({ message, setMessage, name, inputRef }) {
  const [japanese, setJapanese] = useState(false);

  return (
    <TextField
      autoFocus
      inputRef={inputRef}
      fullWidth={true}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        if (japanese) return;
        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          pushMessage({ name, message });
          setMessage("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setJapanese(true)}
      onCompositionEnd={() => setJapanese(false)}
      value={message}
    />
  );
}
