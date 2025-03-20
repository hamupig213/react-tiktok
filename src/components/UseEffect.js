import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const UseEffect = () => {
    // 1. useEffect(callback)
    // - gọi callback mỗi khi component re-render
    // - gọi callback sau khi component thêm element vào dom
    //
    // 2. useEffect(callback, [])
    // - chỉ gọi callback 1 lần sau khi component mounted
    //
    // 3. useEffect(callback, [deps])
    // - callback được gọi lại mỗi khi dependency thay đổi

    //////////////////////
    // 1. Callback luôn được gọi khi component mounted

    // useEffect(() => {
    //     document.title = title;
    // });

    // // 2.
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((posts) => setPosts(posts));
    // }, []);

    ///// 3.

    const tabs = ["posts", "comments", "albums"];

    const [posts, setPosts] = useState([]);
    const [showed, setShowed] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("posts");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => setPosts(posts));
    }, [type]);

    const handleClick = (type) => {
        setType(type);
    };

    return (
        <div style={{ padding: 32 }}>
            <div>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(tab)}
                        style={
                            type === tab
                                ? { color: "red", backgroundColor: "#333" }
                                : {}
                        }
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {/* <div>
                {showed && (
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                )}
            </div> */}
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title ?? post.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { UseEffect };
