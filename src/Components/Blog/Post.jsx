import { Button, Card, CardActionArea, CardContent, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';

const Post = ({ post }) => {

    const { title, description, img, date } = post
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardActionArea component="a" href="#">
                    <Card>
                        <Hidden xsDown>
                            <img src={img} width="100%" alt="" />
                        </Hidden>
                        <div>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {title} - {date}
                                </Typography>
                                <Typography paragraph>
                                    {description}
                                </Typography>
                                <Button color="secondary" variant="outlined"> More </Button>
                            </CardContent>
                        </div>
                    </Card>
                </CardActionArea>
            </Grid>
        </>
    );
};

export default Post;