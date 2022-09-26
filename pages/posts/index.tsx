import React from 'react';
import {NextPage} from "next";
import Layout from "../../components/layout";
import {List} from "@mantine/core";
import Link from "next/link";

export async function getServerSideProps(context: any) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}

const Index: NextPage = ({posts}: any) => {
    return (
        <Layout>
            <List
                spacing="xs"
                size="sm"
                center
                sx={{padding: 15}}
            >
                {posts.map((item: any) => (
                    <Link href={`${item.id}`} key={item.id}>
                        <a>
                            <List.Item sx={{color: '#fff', marginTop: 10}}>{item.title}</List.Item>
                        </a>
                    </Link>
                ))}
            </List>
        </Layout>
    );
};

export default Index;