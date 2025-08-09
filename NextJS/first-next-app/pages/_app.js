import '../styles/main.scss';

export const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
            {/*<style jsx global>{`*/}
            {/*    body {*/}
            {/*        margin: 0;*/}
            {/*        padding: 0;*/}
            {/*        font-family: Roboto, sans-serif;*/}
            {/*        background-color: #f0f0f0;*/}
            {/*        color: #333;*/}
            {/*    }*/}
            {/*    main {*/}
            {/*        padding: 20px;*/}
            {/*    }*/}
            {/*`}</style>*/}
        </>
    )
}

export default MyApp;
