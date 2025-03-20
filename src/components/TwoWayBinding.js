import { useState } from "react";

// two way binding cho form
const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log({
            name,
            email,
        });
    };

    return (
        <div style={{ padding: 32 }}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

const MyRadio = () => {
    const [checked, setChecked] = useState(1);

    const courses = [
        { id: 1, name: "vldt" },
        { id: 2, name: "ctdl" },
        { id: 3, name: "gt1" },
    ];

    const handleSubmit = () => {
        console.log({ id: checked });
    };

    return (
        <div style={{ padding: 32 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Select</button>
        </div>
    );
};

const MyCheckbox = () => {
    const [checked, setChecked] = useState([]);

    const courses = [
        { id: 1, name: "vldt" },
        { id: 2, name: "ctdl" },
        { id: 3, name: "gt1" },
    ];

    console.log(checked);

    const handleSubmit = () => {
        console.log({ checked });
    };

    const handleChecked = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);

            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <div style={{ padding: 32 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Select</button>
        </div>
    );
};

export { MyForm, MyRadio, MyCheckbox };
