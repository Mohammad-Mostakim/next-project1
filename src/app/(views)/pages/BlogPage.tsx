"use client"
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard, { BlogProps } from '@/@core/ui/ui-toolkit/cards/BlogCard';
import { useGetPostsQuery } from '@/lib/Redux/CommonDataQuery';

const BlogPage:React.FC=()=> {
  const [postIdValue, setPostIdValue] = useState<number| string>('');
  const { data, error } = useGetPostsQuery({ postId: postIdValue });
  const blogData: BlogProps[] = [];

  // Assuming `data` is an array of posts
  data?.posts?.map((post: any) => {
    blogData.push({
      id: post.id,
      title: post.title,
      description: post.body,
      author: post.userId.toString(),
      reactions: post.reactions,
    });
  });


  return (
    <Box>
      <Container maxWidth="sm" sx={{ bgcolor: "customBg.paper" }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.title"
          gutterBottom
        >
          Album layout
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Something short and leading about the collection below—its contents, the
          creator, etc. Make it short and sweet, but not too short so folks don not
          simply skip over it entirely.
        </Typography>
      </Container>
      <Container sx={{ py: { xs: 8, lg: 16 } }}>
        <Grid container spacing={8}>
          {blogData && blogData.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default BlogPage