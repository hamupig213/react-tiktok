import { useState } from "react";

const TodoList = () => {
    // sẽ bị load lại nhiều lần => viết initial function
    // const storageTodos = JSON.parse(localStorage.getItem("todos"));

    const [todos, setTodos] = useState(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
        return storageTodos;
    });
    const [todo, setTodo] = useState("");

    const handleSubmit = () => {
        setTodos((prev) => {
            const newTodos = [...prev, todo];

            // lưu vào local storage
            const jsonTodos = JSON.stringify(newTodos);
            localStorage.setItem("todos", jsonTodos);

            return newTodos;
        });
    };
    return (
        <div style={{ padding: 32 }}>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} />

            <button onClick={() => handleSubmit()}>Add</button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
