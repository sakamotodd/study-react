import { useState } from "react";
import { Header } from "../components/Header";
import { IncompleteArea } from "../components/TODO/IncompleteArea";
import { CompleteArea } from "../components/TODO/CompleteArea";
import { InputArea } from "../components/TODO/InputArea";

export default function Todo() {
  //未完了のTODOに設定する初期値
  const [incompleteTasks, setIncompleteTasks] = useState(["初期値"]);
  //完了のTODOに設定する初期値
  const [completeTasks, setCompleteTasks] = useState(["初期値"]);
  //inputに保管する処理
  const [tmp, setTmp] = useState("");

  return (
    <>
      <Header />
      <InputArea
        tmp={tmp}
        incompleteTasks={incompleteTasks}
        setIncompleteTasks={setIncompleteTasks}
        setTmp={setTmp}
      />
      <IncompleteArea
        incompleteTasks={incompleteTasks}
        setIncompleteTasks={setIncompleteTasks}
        completeTasks={completeTasks}
        setCompleteTasks={setCompleteTasks}
        setTmp={setTmp}
      />
      <CompleteArea
        incompleteTasks={incompleteTasks}
        setIncompleteTasks={setIncompleteTasks}
        completeTasks={completeTasks}
        setCompleteTasks={setCompleteTasks}
      />
    </>
  );
}
