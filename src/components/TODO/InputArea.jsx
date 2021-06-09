import { useCallback } from "react";
import styles from "../../styles/Home.module.css";

export function InputArea(props) {
  const { tmp, incompleteTasks, setIncompleteTasks, setTmp } = props;

  const InputTask = (e) => {
    setTmp(e.target.value);
  };

  const searchTask = useCallback(() => {
    setIncompleteTasks((incompleteTasks) => {
      if (incompleteTasks.some((task) => task === tmp)) {
        alert("すでに未完了のTODOにあります");
        setTmp("");
        console.log(incompleteTasks);
        return incompleteTasks;
      }
      return [...incompleteTasks, tmp];
    });
    setTmp("");
  }, [tmp]);

  return (
    <div className="bg-blue-300 w-96 mt-2 p-2 m-auto rounded-lg">
      <input
        className="rounded-2xl border-none p-1 focus:outline-none"
        placeholder="TODOを入力"
        value={tmp}
        onChange={InputTask}
      />
      <button
        className={styles.inputButton}
        onClick={searchTask}
        disabled={tmp == ""}
      >
        追加
      </button>
    </div>
  );
}
