import Header from "@/components/Header"
import TodosLogic from "@/components/TodosLogic"
import '@/components/styles/app.css';
const TodoApp = () => {
    return (
        <div className="wrapper">
            <div className="todos">
               <Header />
                <TodosLogic />
            </div>
         </div>
    )
}

export default TodoApp