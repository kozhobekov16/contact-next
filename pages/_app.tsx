import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core";
import Head from "next/head";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

function MyApp({Component, pageProps}: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })

    return (
        <>
            <Head>
                <title>News page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <QueryClientProvider client={queryClient}>
                <MantineProvider>
                    <Component {...pageProps} />
                </MantineProvider>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
