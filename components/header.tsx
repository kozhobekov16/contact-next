import React from 'react';
import Link from "next/link";
import {NextPage} from "next";
import { Box } from '@mantine/core';

const Header: NextPage = () => {
    return (
        <Box sx={{background: '#062656', padding: 10, display: 'flex', justifyContent: 'space-evenly'}}>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <Link href={'/posts'}>
                <a>Posts</a>
            </Link>
            <Link href={'/contacts'}>
                <a>Contacts</a>
            </Link>
        </Box>
    );
};

export default Header;