import Image from "next/image";
import { unbounded } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow">
      <div>
        <h1 className={`${unbounded.className} text-7xl font-bold text-center`}>
          Hello!
        </h1>
        <div className="mt-8 grid grid-cols-2">
        <Image 
        src="/margaux.webp"
        width={500}
        height={500}
        alt="Margaux"
        className="border-white border-8 rounded-3xl"
        />
        <p className="text-lg flex justify-center items-center">Meet Margaux, the Swiss Army knife of creativity. She's a photographer, brand designer, and web developer all rolled into one power-packed package.</p>
        </div>
      </div>     
    </main>
  );
}