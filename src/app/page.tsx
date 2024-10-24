import About from "@/components/about";
import Faqs from "@/components/faq";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Schedule from "@/components/schedule";
import ThemeAndPrizes from "@/components/theme-and-prize";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <ThemeAndPrizes />
      <Partners />
      <Faqs />
    </>
  );
}
