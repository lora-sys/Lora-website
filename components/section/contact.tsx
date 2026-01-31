"use client";

import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github, Twitter, Instagram, Mail, Send, ArrowUpRight } from "lucide-react";
import { SiBilibili, SiTiktok } from "react-icons/si";
import { MagicCard } from "@/components/ui/magic-card";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const socials = {
  github: "https://github.com/lora-sys",
  x: "https://twitter.com/lora1979391",
  instagram: "https://instagram.com/lora",
  bilibili: "https://space.bilibili.com/lora",
  douyin: "https://v.douyin.com/lora",
};

const email = "lora-sys@outlook.com";

function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}

function ContactContent() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: socials.github, color: "hover:text-white" },
    { name: "Twitter", icon: Twitter, href: socials.x, color: "hover:text-sky-400" },
    { name: "Instagram", icon: Instagram, href: socials.instagram, color: "hover:text-pink-400" },
    { name: "Bilibili", icon: SiBilibili, href: socials.bilibili, color: "hover:text-pink-300" },
    { name: "Douyin", icon: SiTiktok, href: socials.douyin, color: "hover:text-cyan-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      <GradientOrbs />
      <FloatingParticles />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <MagicCard
            className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            gradientColor="#262626"
          >
            <div className="p-6 sm:p-8">
              <BorderBeam size={300} duration={15} delay={5} />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="group relative flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 min-h-[80px] sm:min-h-[100px] justify-center"
                    >
                      <Icon className={`w-7 h-7 sm:w-9 sm:h-9 text-foreground ${social.color} transition-colors duration-300`} />
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {social.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 absolute top-2 right-2 text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-all duration-300" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={`mailto:${email}`}
            className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                  <p className="text-lg sm:text-2xl font-bold text-foreground break-all">
                    {email}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-primary font-medium">
                <span className="hidden sm:inline">Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Open for collaborations and interesting projects
        </motion.p>
      </motion.div>
    </section>
  );
}

export function ContactSection() {
  return <ContactContent />;
}
