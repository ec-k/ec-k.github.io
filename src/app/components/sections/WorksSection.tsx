import ContentCard from "../ContentCard";

export default function WorksSection() {
  return (
    <section className="h-screen w-full pt-20" id="works-section">
      <div className="h-full px-20 grid grid-rows-[1fr_2fr] gap-10">
        <h1 className="flex justify-center items-center text-4xl">WORKS</h1>
        <div className="h-full w-full flex justify-center items-center gap-4">
          <ContentCard
            size={40}
            categoryName="Graphics"
            imageSrc="/icon-512x512.png"
          />
          <ContentCard
            size={40}
            categoryName="Software"
            imageSrc="/icon-512x512.png"
          />
          <ContentCard
            size={40}
            categoryName="Something"
            imageSrc="/icon-512x512.png"
          />
        </div>
      </div>
    </section>
  );
}
