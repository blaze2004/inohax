"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

export default function Schedule() {
  const scheduleEvents = [
    {
      date: "26th October 2024",
      event: "Applications Open",
      description: "Start submitting your applications for Inohax 1.0",
    },
    {
      date: "9th November 2024",
      events: [
        {
          time: "11:00 AM",
          event: "Kick-off",
          description: "Kick-off event, briefing on rules and goals",
        },
        {
          time: "12:00 PM",
          event: "Hackathon Starts",
          description: "Participants begin working on projects",
        },
        {
          time: "5:00 PM",
          event: "1st Mentorship Round",
          description: "Feedback and guidance from mentors",
        },
      ],
    },
    {
      date: "10th November 2024",
      events: [
        {
          time: "9:00 AM",
          event: "2nd Mentorship Round",
          description: "Progress evaluation with mentors",
        },
        {
          time: "12:00 PM",
          event: "Hackathon Ends",
          description: "Project submission deadline",
        },
        {
          time: "2:00 PM",
          event: "Top 3 Winners Announcement",
          description: "Finalists present their work",
        },
        {
          time: "2:45 PM",
          event: "Winner Announcement",
          description: "Final winners are revealed",
        },
        {
          time: "3:00 PM",
          event: "Closing Ceremony",
          description: "Vote of thanks and final remarks",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our exciting journey from applications to the grand finale!
          </p>
        </motion.div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute left-4  h-full w-0.5 bg-gradient-to-b from-primary to-cyan-400"></div>
            {scheduleEvents.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-background z-10">
                    <Calendar className="w-8 h-8 text-primary mr-4" />
                  </div>
                  <h3 className="text-2xl font-bold">{day.date}</h3>
                </div>
                <Card className="ml-12 bg-muted border-border">
                  <CardContent className="p-6">
                    {day.event ? (
                      <>
                        <h4 className="text-xl font-semibold mb-2 text-cyan-400">
                          {day.event}
                        </h4>
                        <p className="text-muted-foreground">{day.description}</p>
                      </>
                    ) : (
                      <div className="space-y-4">
                        {day.events!.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="border-b border-border pb-4 last:border-b-0 last:pb-0"
                          >
                            <div className="flex items-center mb-2">
                              <Clock className="w-5 h-5 text-primary mr-2" />
                              <p className="font-semibold text-gray-200">
                                {event.time}
                              </p>
                            </div>
                            <p className="text-cyan-400 font-medium">
                              {event.event}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {event.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
