import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import styles from '../styles/error.module.scss';

 const ErrorPage = () => {
    return (
        <MainLayout>
            <h1 className={styles.error}>Error 404</h1>
            <p>Page not found</p>
            <p>Go to <Link href="/">home</Link></p>
            <p>Or go to <Link href="/posts">posts</Link></p>
            <p>Or go to <Link href="/about">about</Link></p>
        </MainLayout>
    )
}

export default ErrorPage;
