import "./TaskListStyle.css";

const TaskList = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li>
            <p>{item}</p>
            <div>
              <button>✅</button>
              <button>❌</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
