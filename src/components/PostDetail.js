import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const postData = await fetchPostById(postId);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post", error);
        setLoading(false);
      }
    };
    getPost();
  }, [postId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return <Typography variant="h5">Post not found</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1">{post.body}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDetail;
