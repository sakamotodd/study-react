import { useState } from "react";
import { Header } from "../components/Header";
import SignIn from "../components/SignIn/SignIn";
import Link from "next/link";
import Chat from "./chat";

export default function JavaScript() {
  const [name, setName] = useState("");

  return (
    <>
      <Header />
      {name === "" ? <SignIn setName={setName} /> : <Chat name={name} />}
    </>
  );
}
