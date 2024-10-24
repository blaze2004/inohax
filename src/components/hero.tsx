"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ChevronDown } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const hackathonDate = new Date("2024-11-09T11:00:00+0530");
      const now = new Date();
      const difference = hackathonDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      />
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Inohax 1.0
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl mb-8 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        A 24-hour online open innovation hackathon
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      >
        <Card className="bg-muted border-border">
          <CardContent className="p-4 flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">9th & 10th November 2024</p>
          </CardContent>
        </Card>
        <Card className="bg-muted border-border">
          <CardContent className="p-4 flex items-center space-x-2">
            <Clock className="w-6 h-6 text-cyan-400" />
            <p className="text-muted-foreground">24 Hours of Innovation</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <Card key={unit} className="bg-muted border-border">
            <CardContent className="p-4">
              <motion.p
                className="text-3xl font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                {value}
              </motion.p>
              <p className="text-sm text-gray-400">{unit}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transform transition hover:scale-105"
        >
          Register Now
        </Button>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-primary opacity-50" />
      </motion.div>
    </section>
  );
}
