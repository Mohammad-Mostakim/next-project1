/** @format */
import React from "react";
import { Grid, Box, Avatar, Typography, Button } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";

export interface BlogProps {
  id: number;
  title: string;
  description: string;
  author: string;
  authorImg?: string;
  reactions?: string | number;
}

interface BlogCardProps {
  blog: BlogProps;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: 1,
          borderColor: "grey.200",
          borderRadius: 1,
          boxShadow: 1,
        }}
        bgcolor="background.paper"
      >
        <Typography variant="h4" component="h2" mb={2} sx={{ fontWeight: "bold" }}>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={5}>
          {blog.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={blog.authorImg} sx={{ width: 28, height: 28, mr: 1 }} />
            <Typography variant="subtitle1">{blog.author}</Typography>
          </Box>
          <Button endIcon={<IoArrowForward />} size="small">
            Read more
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default BlogCard;
