import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import useStyles from '../Style/Style';
import blog from '../../FakeData/blog.json'
import Post from './Post';

const Blog = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState(blog)
    useEffect(() => {
        setPosts(posts)
    }, [posts])

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Grid container spacing={3} className={classes.mt}>
                    {posts && posts.map(post => <Post post={post} key={post.id} />)}
                </Grid>
            </Container>
        </>
    );
};

export default Blog;