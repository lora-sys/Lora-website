"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github, Twitter, Instagram, Mail } from "lucide-react";
import { SiBilibili, SiTiktok } from "react-icons/si";
import { ShineBorder } from "@/components/ui/shine-border";
import { useIntlayer } from "react-intlayer";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGlobe } from "@/components/ui/animated-globe";

export function ContactSection() {
  const { title, description, emailLabel } = useIntlayer("contact");

  return (
    <section
      id="contact"
      className="relative w-full bg-background overflow-x-hidden min-h-screen py-20 lg:py-0 lg:h-screen"
    >
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:h-full gap-8 lg:gap-0">
        {/* Globe Column */}
        <div className="relative flex h-[300px] sm:h-[400px] lg:h-full w-full items-center justify-center order-1 lg:order-none">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden h-full w-full">
              <AnimatedGlobe 
                className="opacity-100 h-full w-full max-w-[500px] lg:max-w-none" 
                dotColor="#2563eb"
                lineColor="rgba(59, 130, 246, 0.5)"
                dotCount={60}
                speed="medium"
                intensity="medium"
              />
          </div>
        </div>

        {/* Content Column */}
        <div className="z-10 flex w-full flex-col items-center justify-center gap-8 px-4 pb-10 order-2 lg:order-none lg:h-full">
          {/* Contact Card */}
          <MagicCard 
            className="relative flex w-full max-w-[400px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            gradientColor="#262626"
          >
            <div className="p-8 w-full flex flex-col items-center">
                <BorderBeam size={250} duration={12} delay={9} />
                
                <h2 className="text-3xl font-bold tracking-tighter text-foreground mb-2">{title}</h2>
                <p className="text-muted-foreground text-center mb-6">
                    {description}
                </p>

                <div className="grid grid-cols-3 gap-4 w-full">
                    {siteConfig.socials.github && (
                        <Link href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Github className="w-6 h-6" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                        </Link>
                    )}
                    {siteConfig.socials.x && (
                        <Link href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Twitter</span>
                        </Link>
                    )}
                    {siteConfig.socials.instagram && (
                        <Link href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Instagram</span>
                        </Link>
                    )}
                    {siteConfig.socials.bilibili && (
                        <Link href={siteConfig.socials.bilibili} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <SiBilibili className="w-6 h-6" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Bilibili</span>
                        </Link>
                    )}
                    {siteConfig.socials.douyin && (
                        <Link href={siteConfig.socials.douyin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <SiTiktok className="w-6 h-6" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Douyin</span>
                        </Link>
                    )}
                    <Link href="mailto:hello@loralg.com" className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{emailLabel}</span>
                    </Link>
                </div>
            </div>
          </MagicCard>

          <Link href="mailto:lora-sys@outlook.com" className="relative w-full max-w-[400px] group overflow-hidden rounded-xl">
              <ShineBorder 
                  className="z-0"
                  shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              />
              <div className="relative z-10 flex w-full flex-col items-center justify-center bg-background/30 backdrop-blur-md p-6">
                  <div className="flex flex-col items-center gap-3 w-full">
                      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center w-full">
                          <p className="text-sm font-medium text-muted-foreground mb-1">Primary Email</p>
                          <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent break-all px-2">
                              lora-sys@outlook.com
                          </p>
                      </div>
                  </div>
              </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

