export function IncompleteArea(props) {
  const {
    incompleteTasks,
    setIncompleteTasks,
    completeTasks,
    setCompleteTasks,
    setTmp,
  } = props;

  const deleteButton = (index) => {
    const copyIncompleteTasks = [...incompleteTasks];
    copyIncompleteTasks.splice(index, 1);
    setIncompleteTasks(copyIncompleteTasks);
  };

  const completeButton = (index) => {
    deleteButton(index);
    const copyCompleteTasks = [...completeTasks, incompleteTasks[index]];
    setCompleteTasks(copyCompleteTasks);
  };

  const updateButton = (index) => {
    deleteButton(index);
    setTmp(incompleteTasks[index]);
  };
  return (
    <div className="bg-green-200 w-96 min-h-full mt-2 p-2 m-auto rounded-lg ">
      <p className="text-center mb-2 text-gray-600">未完了のTODO</p>
      <ul className="pl-4">
        {incompleteTasks.map((incompleteTask, index) => {
          return (
            <li className="list-disc ml-6">
              <div className="flex items-center pb-2">
                <p key={incompleteTask}>{incompleteTask}</p>
                <button
                  className="rounded-2xl bg-red-50 p-0.5 ml-1 focus:outline-none hover:text-gray-500"
                  onClick={() => completeButton(index)}
                >
                  完了
                </button>
                <button
                  className="rounded-2xl bg-red-50 p-0.5 ml-1 focus:outline-none hover:text-gray-500"
                  onClick={() => deleteButton(index)}
                >
                  削除
                </button>
                <button
                  className="rounded-2xl bg-red-50 p-0.5 ml-1 focus:outline-none hover:text-gray-500"
                  onClick={() => updateButton(index)}
                >
                  更新
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
