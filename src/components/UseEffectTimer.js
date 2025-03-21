import { useEffect, useState } from "react";

const UseEffectTimer = () => {
    const [countdown, setCountDown] = useState(180);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCountDown((prev) => prev - 1);
    //     }, 1000);

    //     return () => clearInterval(timer); // Xóa interval khi component unmount
    // }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountDown(countdown - 1);
    //     }, 1000);
    // }, [countdown]);

    return (
        <div style={{ padding: 32 }}>
            <h1>{countdown}</h1>
        </div>
    );
};

export { UseEffectTimer };
