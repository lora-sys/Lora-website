import Image from "next/image";
import { life } from "@/config/content";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { TweetCard } from "@/components/ui/tweet-card";
import { Meteors } from "@/components/ui/meteors";

export function LifeSection() {
  return (
    <section id="life" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <Meteors number={20} />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Life & Interests</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            A glimpse into what inspires me, from gaming and tech to cinema and wisdom.
          </p>
        </div>

        <BentoGrid className="mb-16">
          {life.hobbies.map((hobby) => {
            const { Icon, ...rest } = hobby;
            return (
              <BentoCard
                key={rest.name}
                {...rest}
                Icon={
                  <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
                }
                background={
                  <div className="absolute inset-0">
                    <Image
                      src={rest.background}
                      alt={rest.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                }
              />
            );
          })}
        </BentoGrid>

        <div className="space-y-12">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold ml-4">Favorite Tweets</h3>
            <Marquee pauseOnHover className="[--duration:60s] py-4">
              {life.tweets.map((tweet) => (
                <TweetCard
                  key={tweet.id}
                  id={tweet.id}
                  staticData={tweet}
                  className="mx-4 w-full max-w-[300px] md:max-w-[400px]"
                />
              ))}
            </Marquee>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold ml-4">Anime Wisdom</h3>
            <Marquee reverse pauseOnHover className="[--duration:40s] py-4">
              {life.quotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="mx-4 flex h-full w-[300px] md:w-[400px] flex-col justify-center rounded-xl border bg-background/50 p-6 backdrop-blur-sm"
                >
                  <blockquote className="mb-4 text-lg italic leading-relaxed">
                    &quot;{quote.text}&quot;
                  </blockquote>
                  <div className="flex flex-col">
                    <cite className="font-semibold not-italic">
                      {quote.author}
                    </cite>
                    <span className="text-sm text-muted-foreground">
                      {quote.from}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
