import { pushMessage } from "../../../firebase";
import { IconButton } from "@material-ui/core";
import SendSharpIcon from "@material-ui/icons/SendSharp";


export function MessageSubmitButton({ name, message, setMessage, inputRef }) {
  const submitMessage = () => {
    pushMessage({ name, message });
    setMessage("");
    inputRef.current.focus();
  };

  return (
    <>
      <IconButton onClick={() =>submitMessage()} disabled={message === ""}>
        <SendSharpIcon />
      </IconButton>
    </>
  );
}
