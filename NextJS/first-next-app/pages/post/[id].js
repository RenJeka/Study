import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Posts from "../posts";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Post({postContent: serverPost}) {
    const router = useRouter()

    const [postContent, setPostContent] = useState(serverPost);

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const postContent = await response.json();
            setPostContent(postContent)
        }

        if (!serverPost) {
            load();
        }

    }, [router.query.id, serverPost])


    if (!postContent) {
        return <MainLayout>
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

// Post.getInitialProps = async ({query, req}) => {
//
//     if (!req) {
//         return { postContent: null }
//     }
//
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const postContent = await response.json();
//
//
//     return {
//         postContent
//     }
// }


export async function getServerSideProps({ query }) {

    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const postContent = await response.json();


    return {
        props: postContent
    }
}