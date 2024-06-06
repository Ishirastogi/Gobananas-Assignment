import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "Why should we hire you?",
    answer:
      "I bring a strong foundation in web development, with hands-on experience in building responsive and dynamic web applications using React and Material-UI. My proven ability to learn quickly, combined with my passion for creating user-friendly interfaces, makes me a valuable addition to your team.",
  },
  {
    question: "From when can you join?",
    answer:
      "I am available to join immediately and am excited to contribute to your projects right away.",
  },
  {
    question: "What are your strengths?",
    answer:
      "My strengths include a deep understanding of modern web technologies, a proactive approach to problem-solving, and excellent communication skills. I am dedicated to continuous learning and staying updated with industry trends.",
  },
  {
    question: "Can you work in a team?",
    answer:
      "Absolutely. I have experience working in collaborative environments, both as a team member and independently. I value clear communication and believe in leveraging each team member's strengths to achieve common goals.",
  },
];

const FAQ = () => {
  return (
    <div>
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
