import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="font-sans grid-rows-[min-content_1fr_min-content] min-h-screen p-8 gap-16 sm:p-20 mx-auto">
      <Hero />
    </div>
  );
}
