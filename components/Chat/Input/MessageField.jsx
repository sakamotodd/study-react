import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function MessageField({ message, setMessage, name }) {
  const [japanese, setJapanese] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        if (japanese) return;
        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
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
