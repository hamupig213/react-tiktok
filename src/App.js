import { useState } from "react";
import { CleanUpFunction } from "./components/UseEffectCleanup";

function App() {
    const [showed, setShowed] = useState(false);

    return (
        <div id="app" style={{ padding: 32 }}>
            <button onClick={() => setShowed(!showed)}>Toggle</button>
            {showed && <CleanUpFunction />}
        </div>
    );
}

export default App;
