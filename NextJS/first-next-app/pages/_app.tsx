import '../styles/main.scss';
import NextNProgress from 'nextjs-progressbar';

export const MyApp = ({ Component, pageProps }) => {
    return (
        <>

            <NextNProgress
                // color="yellow"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
                showOnShallow={true}
            />
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
