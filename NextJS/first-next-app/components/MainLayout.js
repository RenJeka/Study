import Link from "next/link";
import Head from "next/head";

export const MainLayout = ({title, children}) => {
    return (
        <>

            <Head>
            <title>{title}</title>
            <meta name="description" content="This is the first Next.js application." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <ul >
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>

            <main>
                {children}
            </main>

            <style jsx global>{`
                nav {
                    margin-bottom: 2rem;
                    background: #ccc;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                nav ul {
                    list-style: none;
                    display: flex;
                    gap: 2rem;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
                nav ul li {
                    display: inline;
                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    transition: background 0.2s, color 0.2s;
                }
                nav a:hover,
                nav a:focus {
                    background: #444;
                    color: #ff9800;
                    text-decoration: none;
                }
                nav a:active {
                    background: #ff9800;
                    color: #222;
                    text-decoration: none;
                }

                `}
            </style>
        </>
    )
}
