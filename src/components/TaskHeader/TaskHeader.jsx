import {
  verifyIfValueExistsInLocalStorage,
  saveToLocalStorageFirstTime,
  saveToLocalStorage,
} from "../../utils/LocalStorageHelper";
import "./TaskHeaderStyle.css";
import { useState } from "react";

const TaskHeader = () => {
  const [taskValue, setTaskValue] = useState("");
  const handleSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const isThereItemInLocalStorage = verifyIfValueExistsInLocalStorage();
    if (isThereItemInLocalStorage) {
      saveToLocalStorageFirstTime(taskValue);
    } else {
      saveToLocalStorage(taskValue);
    }
    setTaskValue("");
  };

  return (
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
      <button>Clear All</button>
    </div>
  );
};

export default TaskHeader;
