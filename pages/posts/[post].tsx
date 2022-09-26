import React from 'react';
import {NextPage} from "next";
import Layout from "../../components/layout";
import {List} from "@mantine/core";

export async function getServerSideProps({params}: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}

const Post: NextPage = ({post}: any) => {
    return (
        <Layout>
            <List
                spacing="xs"
                size="sm"
                center
                sx={{padding: 15}}
            >
                {post.map((item: any) => (
                    <List.Item key={item.id} sx={{color: '#fff'}}>{item.title}</List.Item>
                ))}
            </List>
        </Layout>
    );
};

export default Post;