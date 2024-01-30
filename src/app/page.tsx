import Step1 from "@/components/Step1";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center gap-6 md:p-6 md:bg-white bg-magnolia md:h-[60%] md:w-[60%] w-screen h-screen relative">
      <div
        className="bg-no-repeat bg-left w-[274px] h-full rounded-lg hidden md:block"
        style={{ backgroundImage: "url('./images/bg-sidebar-desktop.svg')" }}
      />
      <div
        className="absolute md:hidden block bg-no-repeat bg-top w-full h-[172px] top-0"
        style={{ backgroundImage: "url('./images/bg-sidebar-mobile.svg')" }}
      />
      <div className="flex flex-col justify-between md:w-[80%] h-[90%] md:mt-0 mt-24 md:h-full md:px-12 md:py-6 p-4">
        <div className="flex flex-col gap-8 w-full md:h-full bg-white z-10 p-4 md:p-0 rounded-xl md:rounded-none">
          <Step1 />
        </div>
        <div className="hidden text-lg font-semibold md:flex justify-between items-center w-full bg-white">
          <Button
            variant="link"
            className=" text-cool-gray hover:text-marine-blue"
          >
            Go Back
          </Button>
          <Button className="bg-marine-blue text-white">Next Step</Button>
        </div>
      </div>
      <div className="md:hidden text-lg font-semibold flex justify-between items-center w-full bg-white p-2">
        <Button
          variant="link"
          className=" text-cool-gray hover:text-marine-blue"
        >
          Go Back
        </Button>
        <Button className="bg-marine-blue text-white">Next Step</Button>
      </div>
    </main>
  );
}
