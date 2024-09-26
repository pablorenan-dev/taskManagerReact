import "./TaskListStyle.css";
import PropTypes from "prop-types";

const TaskList = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
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

//valida que a list sempre vai ser um array de strings, se nao da erro.
TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskList;
