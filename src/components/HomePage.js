import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import FAQ from "./FAQ";

const data = {
  name: "ISHI RASTOGI",
  title: "WEB DEVELOPER",
  email: "ishi.rastogi@icloud.com",
  education: {
    degree: "Bachelor Of Science [B.Sc] (Mathematics)",
    institution: "Wilsonia Degree College - [WDC], Moradabad",
    duration: "Aug 2020 - Aug 2023",
  },
  certificates: [
    {
      name: "The Complete Web Development Bootcamp",
      provider: "Udemy - Dr Angela Yu",
      link: "https://www.udemy.com/certificate/UC-0521a7f9-4b76-45c7-b168-770621192123/",
    },
    {
      name: "The Ultimate React Course: React, Redux & More",
      provider: "Udemy - Jonas Schmedtmann",
      link: "https://www.udemy.com/certificate/UC-c288ddf6-0367-45dc-8af4-89ba0a4d4e54/",
    },
  ],
  projects: [
    {
      name: "Responsive Blog Website",
      details: [
        "User-friendly interface for easy blog post creation.",
        "Comments and feedback section for discussions.",
        "Customizable user profiles with bios and pictures.",
      ],
    },
    {
      name: "Responsive ECommerce Website",
      details: [
        "Utilizes React JS for dynamic and responsive user interface.",
        "User-friendly navigation and filtering options for easy product discovery.",
        "Utilizes React Router for smooth navigation between pages and components.",
        "Integration with JSON API for efficient data fetching and updating.",
      ],
    },
    {
      name: "Admin Dashboard Website",
      details: [
        "Utilizes React JS for building features like interactive charts, graphs for monitoring and analysis for administrators.",
        "Backend powered by Node JS for handling server-side logic and API integrations.",
        "Role-based access control ensures that only authorized users can access specific features.",
      ],
    },
  ],
  technicalSkills: [
    "HTML, CSS, JavaScript",
    "React JS",
    "Next JS",
    "Node JS",
    "MongoDB",
    "SQL",
  ],
  workExperience: [
    {
      role: "Freelance Web Developer",
      company: "Vidyadayini Digital",
      duration: "Feb 2024",
      details: [
        "Created a landing page for the increase in sales for the company.",
        "Developed a mobile version of the website that improved usability on mobile devices.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Unorthodox Baniya",
      duration: "Mar 2024",
      details: [
        "Implemented a responsive design that allowed the application to be used across multiple devices with minimal modifications for product shopping.",
      ],
    },
  ],
};

const projectExplanation = {
  title: "React Project Showcase",
  description:
    "This project demonstrates a single-page application built with React and Material-UI, showcasing various skills and features such as API integration, dynamic data display, responsive design, and more.",
  features: [
    "Fetches data from a public API and displays it in a user-friendly format.",
    "Utilizes Material-UI components for styling and layout.",
    "Includes a search feature to filter displayed items.",
    "Responsive design ensures compatibility with different screen sizes.",
    "Features a navigation bar for easy access to different sections.",
  ],
  images: [
    { url: "/P1.jpeg", alt: "Project Screenshot 1" },
    { url: "/P2.jpeg", alt: "Project Screenshot 2" },
  ],
  githubUrl: "https://github.com/Ishirastogi/Ishi-Rastogi-Gobananas-Assignment",
  liveUrl: "https://ishi-rastogi-gobananas-assignment.vercel.app/posts",
};

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
}));

const HomePage = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 3 }}
      >
        <Grid item>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src="/Ishi.jpeg"
          ></Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            {data.title}
          </Typography>
          <Typography variant="body1">{data.email}</Typography>
        </Grid>
      </Grid>
      <SectionTitle variant="h4">Project Explanation</SectionTitle>
      <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h5">{projectExplanation.title}</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {projectExplanation.description}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href={projectExplanation.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginTop: 2 }}
            >
              GitHub
            </Button>

            <Button
              variant="contained"
              color="primary"
              href={projectExplanation.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginTop: 2 }}
            >
              View Live
            </Button>
          </div>
          <Typography variant="h6">Features</Typography>
          {projectExplanation.features.map((feature, index) => (
            <Typography key={index} variant="body1">
              - {feature}
            </Typography>
          ))}
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {projectExplanation.images.map((image, index) => (
              <Grid item key={index} xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="350"
                  image={image.url}
                  alt={image.alt}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <SectionTitle variant="h4">Education</SectionTitle>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">{data.education.degree}</Typography>
          <Typography variant="body1">{data.education.institution}</Typography>
          <Typography variant="body2" color="textSecondary">
            {data.education.duration}
          </Typography>
        </CardContent>
      </Card>

      <SectionTitle variant="h4">Certificates</SectionTitle>
      {data.certificates.map((cert, index) => (
        <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{cert.name}</Typography>
            <Typography variant="body1">{cert.provider}</Typography>
            <Typography variant="body2">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.link}
              </a>
            </Typography>
          </CardContent>
        </Card>
      ))}

      <SectionTitle variant="h4">Projects</SectionTitle>
      {data.projects.map((project, index) => (
        <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{project.name}</Typography>
            {project.details.map((detail, i) => (
              <Typography key={i} variant="body1">
                - {detail}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}

      <SectionTitle variant="h4">Technical Skills</SectionTitle>
      <Card variant="outlined">
        <CardContent>
          {data.technicalSkills.map((skill, index) => (
            <Typography key={index} variant="body1">
              - {skill}
            </Typography>
          ))}
        </CardContent>
      </Card>

      <SectionTitle variant="h4">Work Experience</SectionTitle>
      {data.workExperience.map((experience, index) => (
        <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{experience.role}</Typography>
            <Typography variant="body1">{experience.company}</Typography>
            <Typography variant="body2" color="textSecondary">
              {experience.duration}
            </Typography>
            {experience.details.map((detail, i) => (
              <Typography key={i} variant="body1">
                - {detail}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}

      <SectionTitle variant="h4">FAQ</SectionTitle>
      <FAQ />
    </Container>
  );
};

export default HomePage;
