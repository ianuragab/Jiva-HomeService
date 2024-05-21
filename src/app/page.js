import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="text-3xl font-bold">
        Hello Everyone, Welcome to Jiva Home Service.
      </h1>
      <Button className="bg-purple-600 ">Get Started</Button>
    </main>
  );
}
