import { useEffect, useState } from "react";

// cleanup function luôn được gọi trước khi component unmounted

const UseEffectDomEvent = () => {
    const tabs = ["posts", "comments", "albums"];
    const [showed, setShowed] = useState(true);
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => setPosts(posts));
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 200 ? setShowGoToTop(true) : setShowGoToTop(false);
        };

        window.addEventListener("scroll", handleScroll);
        console.log("add");

        // cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
            console.log("remove");
        };
    }, []);

    return (
        <div style={{ padding: 32 }}>
            <div className="sub-container">
                <button onClick={() => setShowed(!showed)}>Toggle</button>
                {showed && (
                    <div>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setType(tab)}
                                style={
                                    type === tab
                                        ? {
                                              color: "red",
                                              backgroundColor: "#333",
                                          }
                                        : {}
                                }
                            >
                                {tab}
                            </button>
                        ))}
                        <div>
                            <ul>
                                {posts.map((post) => (
                                    <li key={post.id}>
                                        {post.title ?? post.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {showGoToTop && (
                            <button
                                style={{
                                    position: "fixed",
                                    right: 20,
                                    bottom: 20,
                                }}
                            >
                                Go to top
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export { UseEffectDomEvent };
