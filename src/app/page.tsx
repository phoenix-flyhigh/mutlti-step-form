import StepsLayout from "@/components/StepsLayout";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center gap-6 md:p-6 md:bg-white bg-magnolia md:h-[60%] md:w-[60%] w-screen h-screen relative">
      <StepsLayout />
    </main>
  );
}
