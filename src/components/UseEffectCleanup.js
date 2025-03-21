import { useEffect, useState } from "react";

const CleanUpFunction = () => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // clean up function => tránh rò rỉ bộ nhớ

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    });

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />
            {avatar && <img src={avatar.preview} alt="" width="80%" />}
        </div>
    );
};

export { CleanUpFunction };
