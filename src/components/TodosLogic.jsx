import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodosList";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
const TodosLogic = () => {
    const [todos, setTodos] = useState ([
        {
          id: uuidv4(),
            title: 'Setup development environment',
            completed: true,
            },
            {
              id: uuidv4(),
            title: 'Develop website and add content',
            completed: false,
            },
            {
              id: uuidv4(),
            title: 'Deploy to live server',
            completed: false,
         },
       ]);

       const delTodo = (id) =>{
         setTodos([
          ...todos.filter((todo)=>{
            return todo.id !== id;
          })
        ])
       }
      
       const addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      };

      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              todo.title = updatedTitle;
            }
            return todo;
          })
        );
      };
      
    return (
      <div>
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList key={todos.id} todosProps = {todos} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate}/>
        
    </div>
    )
  }
  export default TodosLogic;
  