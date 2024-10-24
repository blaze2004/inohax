"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Partners() {
  const partners: {
    name: string;
    logo: string;
    prize?: string;
  }[] = [
    { name: "Befikra Community", logo: "/partners/befikra.png" },
    {
      name: "Dev Station",
      logo: "/partners/devstation.png",
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
            Our Amazing Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the innovative companies/communities supporting Inohax 1.0!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-muted border-border h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="p-2"
                    />
                    <AvatarFallback>{partner.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">
                    {partner.name}
                  </h3>
                  {partner.prize && (
                    <>
                      <p className="text-cyan-400 text-center font-medium mb-2">
                        Prize Sponsor
                      </p>
                      <p className="text-muted-foreground text-center text-sm">
                        {partner.prize}
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg">
            We&apos;re grateful to our partners for their generous support in
            making Inohax 1.0 an unforgettable experience!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
