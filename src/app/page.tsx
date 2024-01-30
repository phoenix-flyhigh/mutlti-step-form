export default function Home() {
  return (
    <main className="flex items-center gap-6 md:p-6 md:bg-white bg-magnolia md:h-[60%] md:w-[60%] w-screen h-screen relative">
      <div
        className="absolute bg-no-repeat bg-left w-[274px] h-full rounded-lg hidden md:block"
        style={{ backgroundImage: "url('./images/bg-sidebar-desktop.svg')" }}
      />
      <div
        className="absolute md:hidden block bg-no-repeat bg-top w-full h-[172px] top-0"
        style={{ backgroundImage: "url('./images/bg-sidebar-mobile.svg')" }}
      />
    </main>
  );
}
