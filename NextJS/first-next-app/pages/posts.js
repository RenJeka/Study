import {useState, useEffect} from "react";

import { MainLayout } from "../components/MainLayout";
import styles from '../styles/posts.module.scss';
import Link from "next/link";

export default function Posts({ posts: serverPosts }) {

    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch('http://localhost:4200/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        if (!serverPosts) {
            load();
        }
        
    }, []);

    if (!posts) {
        return <MainLayout title="Loading...">
            <p>Loading posts...</p>
        </MainLayout>;
    }

    return (<MainLayout title="Posts page">
        <h1>Posts page</h1>

        {posts?.length > 0 ? (
            posts.map(post => (
                <div key={post.id} className={styles.post} >
                    <Link href={`/post/[id]`} as={`/post/${post.id}`}><h5 className={styles.title}>{post.title}</h5></Link>
                </div>
            ))
        ) : (
            <p>No posts available</p>
        )}
    </MainLayout>
    );
}

Posts.getInitialProps = async ({req}) => {

    if (!req) {
        return { posts: null };
    }

    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();

    return {
        posts
    }
}
