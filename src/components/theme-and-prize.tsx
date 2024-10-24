"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Shirt } from "lucide-react";

export default function ThemeAndPrizes() {
  const prizes = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: "Grand Prize",
      description: "INR 10,000 for the winning team",
    },
    {
      icon: <Shirt className="w-12 h-12 text-primary" />,
      title: "T-Shirts",
      description: "T-shirts from our parrtners",
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Inovact Reward Points",
      description: "Earn points for participating and winning in the Inovact Social app",
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
            Theme & Prizes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for an exciting journey of innovation and creativity!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-muted border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  Hackathon Theme
                </h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Inohax 1.0 is an open innovation hackathon designed
                  specifically for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Students with a passion for technology and problem-solving
                  </li>
                  <li>
                    Aspiring entrepreneurs ready to bring their ideas to life
                  </li>
                  <li>Innovators looking to make a real-world impact</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our theme encourages participants to think outside the box and
                  create solutions that can shape the future of technology and
                  business.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-muted border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                  Exciting Prizes
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Showcase your skills and win amazing rewards!
                </p>
                <div className="space-y-6">
                  {prizes.map((prize, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-4 mt-1">{prize.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-1">
                          {prize.title}
                        </h4>
                        <p className="text-gray-400">{prize.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
