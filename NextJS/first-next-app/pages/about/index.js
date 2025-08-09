import Router from 'next/router';
import { MainLayout } from "../../components/MainLayout";

export default function Index({title, content }) {
    return <MainLayout title="About page">
        {/*<h1>{JSON.stringify(title, null, 2)}</h1>*/}
        <h1>{title}</h1>
        <button onClick={() => {
            Router.push('/')
        }}>Go back to home</button>
    </MainLayout>
}

Index.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about');

    const data = await response.json();

    return {
        title: data.title,
        content: data.content
    }
}
