import "./Main.css";
import Form from "../form/Form.jsx";
import { useEffect, useState } from "react";
import Card from "../cards/Card.jsx";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Main = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/posts`);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleAddArticle = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
        setShowCreateForm(false); 
    };

    const handleDelete = (slug) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.slug !== slug));
    };

    return (
        <main className="background">
            <div className="container">
                <div style={{ padding: '1rem' }}>
                    <button onClick={() => setShowCreateForm((curr) => !curr)}>
                        {showCreateForm ? 'Annulla' : 'Crea post'}
                    </button>
                </div>
                {showCreateForm && 
                    <Form onAddArticle={handleAddArticle} />
                }
                <div className="card-container">
                    {posts.map((post) => (
                        <Card key={post.id} post={post} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;
