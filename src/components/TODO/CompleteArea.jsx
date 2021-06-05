import { useState } from "react";

export function CompleteArea(props) {
  const {
    incompleteTasks,
    setIncompleteTasks,
    completeTasks,
    setCompleteTasks,
  } = props;

  const backButton = (index) => {
    const copyCompleteTasks = [...completeTasks];
    copyCompleteTasks.splice(index, 1);
    setCompleteTasks(copyCompleteTasks);
    const addIncompleteTasks = [...incompleteTasks, completeTasks[index]];
    setIncompleteTasks(addIncompleteTasks);
  };
  return (
    <div className="bg-yellow-200 w-96 min-h-full mt-2 p-2 m-auto rounded-lg">
      <p className="text-center mb-2 text-gray-600">完了のTODO</p>
      <ul className="pl-4">
        {completeTasks.map((completeTask, index) => {
          return (
            <li className="list-disc ml-6 ">
              <div className="flex items-center pb-2" key={completeTask}>
                <p>{completeTask}</p>
                <button
                  className="rounded-2xl bg-red-50 p-0.5 ml-1 focus:outline-none hover:text-gray-500"
                  onClick={() => backButton(index)}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
