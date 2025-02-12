import { Hero, About, CTA, Timeline } from "./components";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
      </div>
      <CTA />
      <div className="container">
        <Timeline timelineType="education" />
        <Timeline timelineType="experience" />
      </div>
    </main>
  );
}
