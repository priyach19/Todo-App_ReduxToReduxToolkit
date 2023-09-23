import { useSelector, useDispatch } from "react-redux";
//import { toggleTodo } from "../../redux/actions/todoActions";

import styles from "./ToDoList.module.css";
import { actions, todoSelector } from "../../redux/reducers/todoReducer";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            //disptach(toggleTodo(index))
          disptach(actions.toggle(index))}}
        
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;