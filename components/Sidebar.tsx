import { appState$ } from "@/lib/store";
import { Info, Move, Rotate3d, ScanSearch, X } from "lucide-react";
import { PropsWithChildren } from "react";
import { use$ } from "@legendapp/state/react";
import Link from "next/link";
import wappen from "@/public/wappen.svg";

export const Wrapper = ({ children }: PropsWithChildren) => {
  const isOpen = use$(appState$.isSidebarOpen);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-[9999] p-5">
        <img src={wappen.src} alt="wappen" className="w-20" />
      </div>
      <div
        className={`absolute md:w-[40%] lg:w-[30%] w-screen z-[9999] h-[100vh] bg-black p-5 ${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-300`}
        id="slide"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl text-white">Arcadia Restaurant</h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              appState$.isSidebarOpen.set(false);
            }}
          >
            <X />
          </div>
        </div>
        <div>
          <img src="restaurant.jpg" className="rounded-md mt-4" alt="" />
          <p className="text-foregroundDimmed text-[12px] text-right mt-[2px] font-[400]">
            Source: Max Mustermann
          </p>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-[16px] text-foregroundDimmed font-[400]">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
      </div>
      <div className="h-[90vh] relative">
        <div className="absolute p-5 bottom-0 right-0 z-[8888]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Rotate3d />
              <p>
                <span className="font-bold">Drehen:</span> Linksklicken & ziehen
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Move />
              <p>
                <span className="font-bold">Bewegen:</span> Rechtsklicken &
                ziehen
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ScanSearch />
              <p>
                <span className="font-bold">Zoom:</span> Mausrad verwenden
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Info />
              <p>
                <span className="font-bold">Details:</span> Auf Marker klicken
              </p>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="w-full bg-backgroundSecondary flex items-center justify-center gap-4 h-[10vh]">
        <Link
          href={"legal/imprint"}
          className="text-foregroundDimmed text-[16px]"
        >
          Impressum
        </Link>
        <Link
          href={"legal/privacy"}
          className="text-foregroundDimmed text-[16px] font-[400]"
        >
          Datenschutzerklärung
        </Link>
      </div>
    </div>
  );
};
