import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./theme";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AssignmentDetail from "./components/AssignmentDetail";
import Explanation from "./components/Explanation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
