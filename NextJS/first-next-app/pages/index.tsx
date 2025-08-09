import Link from 'next/link';
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";


export default function Index() {
    return <MainLayout title="First Next.js App">
        <Head>
            <title>First Next.js App</title>
            <meta name="description" content="This is the first Next.js application." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Hello next JS</h1>
        <p>Welcome to the first Next.js app!</p>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/posts">Posts</Link></p>
    </MainLayout>
}

