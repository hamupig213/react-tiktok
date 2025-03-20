import { useState } from "react";

const gifts = ["Máy báy", "Xe lửa", "Ô tô"];

const Gift = () => {
    const [gift, setGift] = useState();

    const handleTakeGift = () => {
        let index = Math.floor(Math.random() * gifts.length);

        setGift(gifts[index]);
    };

    return (
        <>
            <h1>{gift || "Chưa có phần thưởng"}</h1>
            <button onClick={handleTakeGift}>Lấy quà nè!</button>
        </>
    );
};

export { Gift };
