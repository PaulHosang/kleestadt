import { appState$ } from "@/lib/store";
import { Info, Move, Rotate3d, ScanSearch, X } from "lucide-react";
import { PropsWithChildren } from "react";
import { use$ } from "@legendapp/state/react";
import Link from "next/link";
import wappen from "@/public/wappen.svg";

export const Wrapper = ({ children }: PropsWithChildren) => {
  const isOpen = use$(appState$.isSidebarOpen);
  const showControlsPopup = use$(appState$.showControlsPopup);
  const selectedAttraction = use$(appState$.selectedAttraction);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-[9999] p-5">
        <img src={wappen.src} alt="wappen" className="w-[150px] md:w-[200px]" />
      </div>
      <div
        className={`absolute md:w-[40%] lg:w-[30%] w-screen z-[9999] h-[100vh] bg-black p-5 overflow-x-hidden overflow-y-auto ${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-300`}
        id="slide"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl text-white">
            {selectedAttraction?.name || "Objekt"}
          </h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              appState$.isSidebarOpen.set(false);
            }}
          >
            <X />
          </div>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-[16px] text-foregroundDimmed font-[400]">
          {selectedAttraction?.description || "Wähle ein Objekt aus"}
        </p>
        {selectedAttraction?.images && (
          <div className="space-y-6 mt-6">
            {selectedAttraction.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="attraction"
                className="w-full aspect-video object-cover rounded-md"
              />
            ))}
          </div>
        )}
      </div>
      <div className="h-[90vh] relative">
        {showControlsPopup && (
          <div className="absolute p-5 bottom-[13px] rounded-md border-border border right-[10px] z-[8888] bg-backgroundSecondary ">
            <X
              size={18}
              className="cursor-pointer absolute top-2 right-2 stroke-foregroundDimmed"
              onClick={() => appState$.showControlsPopup.set(false)}
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Rotate3d />
                <p>
                  <span className="font-bold">Drehen:</span> Linksklicken &
                  ziehen
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
        )}
        {!showControlsPopup && (
          <div
            className="absolute p-2 cursor-pointer bottom-[13px] rounded-md border-border border right-[10px] z-[8888] bg-backgroundSecondary flex flex-row items-center gap-2"
            onClick={() => appState$.showControlsPopup.set(true)}
          >
            <Info
              size={18}
              className=" stroke-foregroundDimmed hover:stroke-foreground"
            />
            <p>Steuerung</p>
          </div>
        )}
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
