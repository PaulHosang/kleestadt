import { use$ } from "@legendapp/state/react";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";
import { appState$ } from "../lib/store";

export const Sidebar = ({ children }: PropsWithChildren) => {
  const isOpen = use$(appState$.isSidebarOpen);
  return (
    <div className="w-screen h-screen overflow-hidden">
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
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-[16px]">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
      </div>

      {children}
    </div>
  );
};
