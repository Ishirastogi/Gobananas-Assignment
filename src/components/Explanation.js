import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Explanation = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Explanation of Features
        </Typography>

        <Typography variant="h6" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates my skills in React, Material-UI, and API
          integration by building a post management application. The application
          fetches data from a public API and displays it in a post-friendly
          format. Below are the main features of the application:
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Fetching Data from API
        </Typography>
        <Typography variant="body1" paragraph>
          The application fetches post data from the JSONPlaceholder API using
          the <code>axios</code> method in an asynchronous manner. This is done
          in the <code>useEffect</code> hook to ensure data is fetched when the
          component mounts.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`import { fetchPosts } from "../services/api";
  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
        setFilteredPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts", error);
        setLoading(false);
      }
    };
    getPosts();
  }, []);         
          `}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          2. Displaying Data Using Material-UI
        </Typography>
        <Typography variant="body1" paragraph>
          The post data is displayed in a responsive grid layout using
          Material-UI components like <code>Container</code>, <code>Grid</code>,{" "}
          <code>Card</code>, <code>CardContent</code>, <code>Typography</code>,
          and <code>Paper</code>. Each post's information is displayed in a{" "}
          <code>Card</code> component.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`<Grid container spacing={3}>
        {currentPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                },
              }}
              onClick={() => handleCardClick(post.id)}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {post.title}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>`}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          3. Search Functionality
        </Typography>
        <Typography variant="body1" paragraph>
          A search bar is implemented to filter posts by their names. The search
          functionality updates the displayed posts in real-time as the post
          types in the search bar.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`
      <TextField
          label="Search Posts"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        useEffect(() => {
          const results = posts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredPosts(results);
        }, [searchQuery, posts]);
        `}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          4. Pagination
        </Typography>
        <Typography variant="body1" paragraph>
          The application includes pagination to handle large sets of post data.
          It displays a limited number of posts per page and allows navigation
          between pages using the Material-UI <code>Pagination</code> component.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`
            const handlePageChange = (event, value) => {
              setCurrentPage(value);
            };
          
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

            <Pagination
            count={Math.ceil(filteredPosts.length / postsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            />
          
          `}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          5. Routing
        </Typography>
        <Typography variant="body1" paragraph>
          The application uses React Router for navigation between different
          pages, including a home page, an assignment detail page, a post list
          page, and an explanation page. This demonstrates the use of
          client-side routing in a React application.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`
                <Router>
                {/* App bar with title */}
                <NavBar />
                <Container sx={{ paddingTop: 3 }}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/post/:postId" element={<PostDetail />} />
                    <Route path="/assignment" element={<AssignmentDetail />} />
                    <Route path="/explanation" element={<Explanation />} />
                  </Routes>
                </Container>
              </Router>
          `}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          6. Post Detail View
        </Typography>
        <Typography variant="body1" paragraph>
          Each post card is clickable and navigates to a detailed view of the
          post. This view displays more information about the post, such as
          their address, company, phone number, and website.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`const handleCardClick = (postId) => {
  navigate(\`/post/\${postId}\`);
};


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

`}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          Additional Features
        </Typography>
        <Typography variant="body1" paragraph>
          1. <strong>Navigation Bar</strong>: A navigation bar is included at
          the top of the application, allowing posts to easily navigate between
          the home page, assignment detail page, post list page, and explanation
          page.
        </Typography>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {`<AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={NavLink} to="/">
            Ishi
          </Button>
        </Typography>

        <Button color="inherit" component={NavLink} to="/posts">
          App
        </Button>
        <Button color="inherit" component={NavLink} to="/assignment">
          Test
        </Button>
        <Button color="inherit" component={NavLink} to="/explanation">
          Explanation
        </Button>
      </Toolbar>
    </AppBar>`}
        </SyntaxHighlighter>

        <Typography variant="h6" gutterBottom>
          Conclusion
        </Typography>
        <Typography variant="body1" paragraph>
          This project showcases my ability to build a full-fledged React
          application with a variety of features, including API integration,
          responsive design, search functionality, pagination, and routing. It
          demonstrates my proficiency with React and Material-UI, as well as my
          ability to write clean, maintainable code.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Explanation;
