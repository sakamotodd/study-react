import { useState } from "react";
import { Header } from "../components/Header";
import SignIn from "../components/Chat/SignIn";
import Chat from "../components/Chat/chat";


export default function JavaScript() {
  const [name, setName] = useState("");
  if (name === "") {
    return (
      <>
        <Header />
        <SignIn setName={setName} />
      </>
    );
  } else {
    return <Chat name={name} />;
  }
}
