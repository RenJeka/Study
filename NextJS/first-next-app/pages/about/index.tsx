import Router from 'next/router';
import { MainLayout } from "../../components/MainLayout";

interface AboutProps {
    title: string;
    content: string;
}

export default function Index({title, content } : AboutProps) {
    return <MainLayout title="About page">
        {/*<h1>{JSON.stringify(title, null, 2)}</h1>*/}
        <h1>{title}</h1>
        <button onClick={() => {
            Router.push('/')
        }}>Go back to home</button>
    </MainLayout>
}

Index.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title,
        content: data.content
    }
}
