import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import './style.css';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openPostId, setOpenPostId] = useState(null);

    const fetchPosts = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const toggleAccordion = (postId) => {
        setOpenPostId(openPostId === postId ? null : postId);
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Lista de Posts</h1>
            <button onClick={fetchPosts}>Recarregar</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="accordion-container">
                        <div className="accordion-title" onClick={() => toggleAccordion(post.id)}>
                            <p>{post.title}</p>
                            <button>
                                {openPostId === post.id ? <ArrowUp /> : <ArrowDown />}
                            </button>
                        </div>
                        <div className={`accordion-content ${openPostId === post.id ? 'open' : ''}`}>
                            <p>{post.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}