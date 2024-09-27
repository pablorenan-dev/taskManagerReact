import {
  verifyIfValueExistsInLocalStorage,
  saveToLocalStorageFirstTime,
  saveToLocalStorage,
} from "../../utils/LocalStorageHelper";
import TaskList from "../TaskList/TaskList";
import "./TaskHeaderStyle.css";
import { useEffect, useState } from "react";

const TaskHeader = () => {
  const [taskValue, setTaskValue] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const isThereItemInLocalStorage = verifyIfValueExistsInLocalStorage();
    if (isThereItemInLocalStorage) {
      const res = saveToLocalStorageFirstTime(taskValue);
      console.log(res, "res");
      setList(res);
    } else {
      const res = saveToLocalStorage(taskValue);
      console.log(res, "res");

      setList(res);
    }
    setTaskValue("");
  };
  const clearItemsLocalStorage = () => {
    localStorage.clear();
    setList([]);
  };
  useEffect(() => {
    console.log();
    const res = JSON.parse(localStorage.getItem("taskItems"));
    if (res) {
      setList(res);
    }
  }, []);

  return (
    <>
      <div>
        <h2>Create Task</h2>
        <input
          type="text"
          onKeyDown={handleSubmit}
          onChange={(event) => {
            setTaskValue(event.target.value);
          }}
          value={taskValue}
        />
        <button
          onClick={() => {
            clearItemsLocalStorage();
          }}
        >
          Clear All
        </button>
      </div>
      <TaskList list={list} />
    </>
  );
};

export default TaskHeader;
