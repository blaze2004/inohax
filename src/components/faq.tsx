"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "What is Inohax 1.0?",
      answer:
        "Inohax 1.0 is a flagship hackathon by Inovact, bringing together the brightest minds in technology and entrepreneurship."
    },
    {
      question: "Who can participate in Inohax 1.0?",
      answer:
        "Inohax 1.0 is open to all students and professionals interested in technology and innovation."
    },
    {
      question: "How can I register for Inohax 1.0?",
      answer:
        "You can register for Inohax 1.0 by visiting our website and filling out the registration form."
    },
    {
      question: "What are the prizes for Inohax 1.0?",
      answer:
        "Inohax 1.0 offers exciting prizes including cash rewards, mentorship programs, and more."
    },
    {
      question: "When is Inohax 1.0 happening?",
      answer:
        "Inohax 1.0 is scheduled to take place on 9th and 10th November 2024."
    }
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
