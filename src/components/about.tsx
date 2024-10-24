"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Lightbulb, Trophy } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Powered by Proof of Work",
      description:
        "Flex your skills and earn some serious street cred through proof of work.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Connect",
      description:
        "Network with like-minded students and entrepreneurs from diverse backgrounds.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovate",
      description:
        "Collaborate on cutting-edge projects and bring your ideas to life.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-cyan-400" />,
      title: "Achieve",
      description:
        "Showcase your skills and win prizes in our flagship hackathon.",
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
            Innovate Today, Impact Tomorrow.
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Inohax is the flagship hackathon by Inovact, bringing together the
            brightest minds in technology and entrepreneurship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-muted border-border">
            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  Inohax Hackathon
                </h3>
                <p className="mb-6">
                  Inohax is a 24-hour online open innovation hackathon that
                  challenges participants to solve real-world problems using
                  cutting-edge technology. With mentorship from industry
                  experts, workshops, and exciting prizes, Inohax is the perfect
                  platform to showcase your skills and make a lasting impact.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/inohax_showcase.svg"
                    alt="Inohax Hackathon"
                    width={512}
                    height={256}
                    className="transition-transform duration-300 hover:scale-105 w-full h-full"
                  />
                </div>
              </motion.div>
            </CardContent>
          </Card>
          <Card className="bg-muted border-border">
            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                  About Inovact
                </h3>
                <p className="mb-6">
                  Inovact is a revolutionary social network for students and
                  entrepreneurs, powered by proof of work. Our platform fosters
                  innovation, collaboration, and growth by connecting talented
                  individuals and providing them with the tools and resources
                  they need to succeed in today&apos;s fast-paced digital world.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/inovact_showcase.svg"
                    alt="Inovact Platform"
                    width={512}
                    height={256}
                    className="transition-transform duration-300 hover:scale-105 w-full h-full"
                  />
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            Why Join Us?
          </h3>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the unique aspects that make Inohax and Inovact stand out.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <Card key={index} className="bg-muted border-border">
              <CardContent className="p-6">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-xl font-bold mb-2 text-gray-100">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
