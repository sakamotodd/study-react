import { useCallback, useEffect, useState } from "react";
import { Header } from "../components/Header";
import toast, { Toaster } from 'react-hot-toast';

export default function practice() {
  const [num, setNum] = useState(1);
  const [bol, setBol] = useState(true);
  const [text, setText] = useState("");
  const notify = () => toast('Here is your toast.');

  const plus = () => {
    if (bol === true) {
      if (num <= 10) {
        setNum((num) => num + 1);
      }
    }
  };

  const change = useCallback(() => {
    setBol((e) => !bol);
    console.log(bol);
  }, [bol]);

  const inputA = (e) => {
    if (text.length < 5) {
      setText(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <p>{bol && num}</p>
      <button onClick={plus}>ボタン</button>
      <button onClick={change}>{bol ? "非表示" : "表示"}</button>
      <br />
      <input
        className="border-2 border-black"
        type="text"
        value={text}
        placeholder="文字"
        onChange={inputA}
      />
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </>
  );
  5;
}
