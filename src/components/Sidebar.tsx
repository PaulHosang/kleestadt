import { use$ } from "@legendapp/state/react";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";
import { appState$ } from "../lib/store";

export const Sidebar = ({ children }: PropsWithChildren) => {
  const isOpen = use$(appState$.isSidebarOpen);
  return (
    <div className="w-screen h-screen overflow-hidden">
      {isOpen && (
        <div className="absolute md:w-[40%] lg:w-[30%] w-screen z-[9999] h-[90vh] bg-red-300 right-0 p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl">Arcadia Restaurant</h1>
            <div
              className="cursor-pointer"
              onClick={() => {
                appState$.isSidebarOpen.set(false);
              }}
            >
              <X />
            </div>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
        </div>
      )}
      {children}
    </div>
  );
};
