import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* App bar with title */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">GoBananas Assignment Post List App</Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ paddingTop: 3 }}>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:postId" element={<PostDetail />} />
          </Routes>
        </Container>
        {/* Footer */}
        <Box
          sx={{
            p: 2,
            mt: "auto",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2024 GoBananas Assignment Post List App. All rights reserved.
          </Typography>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
