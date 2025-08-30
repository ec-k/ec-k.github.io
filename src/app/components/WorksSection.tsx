export default function WorksSection() {
  return (
    <section className="h-screen w-full pt-20" id="works-section">
      <div className="h-full px-20 grid grid-rows-1-2 gap-10">
        <h1 className="flex justify-center items-center text-4xl">WORKS</h1>
        <div className="h-full w-full flex justify-center items-center">
          <div className="h-60 w-60 flex flex-col items-center justify-center">
            <h2 className="text-center">Graphics</h2>
            <div className="h-40 w-40 bg-gray-400"></div>
          </div>
          <div className="h-60 w-60 flex flex-col items-center justify-center">
            <h2 className="text-center">Software</h2>
            <div className="h-40 w-40 bg-gray-500"></div>
          </div>
          <div className="h-60 w-60 flex flex-col items-center justify-center">
            <h2 className="text-center">Something</h2>
            <div className="h-40 w-40 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
