import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Posts from "../posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostProps {
    postContent: MyPost | null;
}

export default function Post({postContent: serverPost}: PostProps) {
    const router = useRouter()

    const [postContent, setPostContent] = useState(serverPost);

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
            const postContent = await response.json();
            setPostContent(postContent)
        }

        if (!serverPost) {
            load();
        }

    }, [router.query.id, serverPost])


    if (!postContent) {
        return <MainLayout title={`post ${router.query.id}`}>
            <p>Loading ... </p>
        </MainLayout>
    }

    return (
        <MainLayout title={`post ${postContent?.id}`}>
            <h3>Post {postContent?.title}</h3>
            <hr/>

            <p>{postContent?.content}</p>

            <hr/>
            <Link href={'/posts'}>Back to all posts</Link>

        </MainLayout>
    );
}


interface PostNextPageContext extends NextPageContext {
    query: {
        id: string;
    };
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {

    if (!req) {
        return { postContent: null }
    }

    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const postContent: MyPost = await response.json();


    return {
        postContent
    }
}


// export async function getServerSideProps({ query }) {
//
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const postContent = await response.json();
//
//
//     return {
//         props: postContent
//     }
// }