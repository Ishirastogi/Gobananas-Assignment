import React from "react";
import { Container, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";

const assignmentMarkdown = `
# GoBananas Assignment

## Task Description:
Build a Simple React Application with API Integration and Material-UI.
You must build a single-page application that fetches data from a public API and displays it in a user-friendly format. The application should include:

### Tasks:
- Fetch data from API
- Display data using Material-UI
- Implement pagination
- Implement search functionality

### Requirements:
- Use React.js to build the application.
- Fetch data from a public API (e.g., JSONPlaceholder, OpenWeatherMap, or any other public API).
- Implement the UI using Material-UI components.
- Ensure the application is responsive and works well on different screen sizes.
- Use modern JavaScript (ES6+) features.
- Write clean, maintainable code with proper comments.

### Instructions:
1.	Setup: Create a React project using the Create React App.
2.	API Integration: Choose a public API and fetch data using fetch or axios.
3.	Display Data: Use Material-UI components to display the fetched data in a table or list.
4.	Search Functionality: Implement a search bar to filter the displayed items based on user input.
5.	Styling: Ensure the application is visually appealing and responsive.

### Submission Guidelines:
- Submit your code as a GitHub repository link.
- Ensure the repository is public.
- Deploy the page on Vercal or comparable platform.

### Evaluation Criteria:
- Functionality: Does the application fetch and display data correctly?
- Code Quality: Is the code clean, well-organized, and commented?
- Design: Is the application user-friendly and visually appealing?
- Creativity: Does the application show originality in implementation?

### Example Public APIs to Use:
- JSONPlaceholder: A fake online REST API for testing and prototyping (<https://jsonplaceholder.typicode.com/>)
- OpenWeatherMap: Provides weather data (<https://openweathermap.org/api>)
- The Dog API: Provides random images of dogs (<https://thedogapi.com/>)

`;

const AssignmentDetail = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <ReactMarkdown>{assignmentMarkdown}</ReactMarkdown>
      </Paper>
    </Container>
  );
};

export default AssignmentDetail;
