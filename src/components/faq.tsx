"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "What is Inohax 1.0?",
      answer:
        "Inohax 1.0 is a 24-hour online open innovation hackathon designed for students and entrepreneurs to collaborate, innovate, and showcase their skills. The event will be held on the 9th and 10th of November 2024.",
    },
    {
      question: "Who can participate in Inohax 1.0?",
      answer:
        "Inohax 1.0 is open to students and entrepreneurs from any background. If you have a passion for problem-solving and innovation, you are welcome to join!",
    },
    {
      question: "What is the prize for the winning team?",
      answer: "The top team will win a cash prize of INR 10,000.",
    },
    {
      question: "How do I register for the hackathon?",
      answer:
        "You can register by filling out the registration form on this page. Make sure to gather your team details and have your Inovact Social project links ready.",
    },
    {
      question: "Is there a participation fee?",
      answer: "No, participation in Inohax 1.0 is completely free.",
    },
    {
      question: "Can I participate without a team?",
      answer: "No, a team of 3-5 members is required to participate in Inohax.",
    },
    {
      question: "What is the format of the hackathon?",
      answer:
        "Inohax 1.0 is an online hackathon, so you can participate from anywhere. The event will take place over 24 hours, starting on November 9th at 11 AM and ending on November 10th at 12 PM.",
    },
    {
      question: "Do I need to use Inovact Social for the hackathon?",
      answer:
        "Yes, all participants must submit their project through Inovact Social. You can find a video tutorial on how to upload your project and copy your project link during registration.",
    },
    {
      question: "What kind of projects can we submit?",
      answer:
        "You can submit projects in a variety of domains such as EdTech, HR Tech, Web3, AI, and more. Choose a domain that aligns with your team's strengths and interests.",
    },
    {
      question: "How will mentorship work during the hackathon?",
      answer:
        "There will be two mentorship rounds during the hackathon. The first round will be at 5 PM on November 9th, and the second will be at 9 AM on November 10th. Mentors will provide guidance and feedback on your project.",
    },
    {
      question: "How will the winners be selected?",
      answer:
        "A panel of judges will evaluate the projects based on innovation, execution, and impact. The top 3 teams will present their projects to the jury at 2 PM on November 10th, followed by the winner announcement.",
    },
    {
      question: "Who can I contact if I have more questions?",
      answer:
        "For any additional queries, you can contact Rishab at +91 9205541450.",
    },
  ];

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question? We&apos;ve got the answers!
          </p>
        </motion.div>

        <div className="flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full max-w-xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
