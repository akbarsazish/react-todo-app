import styles from "@/components/styles/TodoItem.module.css"
const TodoItem = ({ itemProp, setTodos, delTodo}) => {
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo)=>{
        if(todo.id === id){
          return {
            ... todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  };

  return (
    <li className={styles.item}>
       <div className={styles.content}>
          <input type="checkbox"  checked={itemProp.completed} onChange={() => handleChange(itemProp.id)}/>
           {itemProp.title}
          <button onClick={() => delTodo(itemProp.id)}> Delete </button>
      </div>
    </li>
  );
  };
  export default TodoItem;
  