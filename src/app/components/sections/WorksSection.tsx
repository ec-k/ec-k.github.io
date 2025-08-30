import ContentCard from "../ContentCard";

export default function WorksSection() {
  const cardSize: number = 60;
  return (
    <section className="h-screen w-full pt-20" id="works-section">
      <div className="h-full px-20 grid grid-rows-[1fr_2fr] gap-10">
        <h1 className="flex justify-center items-center text-4xl">WORKS</h1>
        <div className="flex h-full w-full justify-center items-center gap-10">
          <ContentCard
            size={cardSize}
            categoryName="Illustration"
            imageSrc="/images/illustration_1.png"
          />
          <ContentCard
            size={cardSize}
            categoryName="Software"
            imageSrc="/images/software_1.png"
          />
        </div>
      </div>
    </section>
  );
}
