import Image from "next/image";
import CitySelection from "./(site)/(home)/components/CitySelection";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <Image
        src="/images/storm.jpg"
        quality={100}
        fill
        alt=""
        className="pointer-events-none object-cover"
      />
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "85vh" }}
      >
        <CitySelection />
      </div>
    </main>
  );
}
