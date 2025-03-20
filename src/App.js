import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const handleIncrease = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>increase</button>
        </div>
    );
}

export default App;
