import { observable } from "@legendapp/state";

interface Attraction {
  id: string;
  name: string;
  description: string;
  position: [number, number, number];
}

interface AppState {
  isSidebarOpen: boolean;
  selectedAttraction: Attraction | null;
  attractions: Attraction[];
  showControlsPopup: boolean;
}

export const appState$ = observable<AppState>({
  attractions: [
    {
      id: "1",
      name: "Attraction 1",
      description: "This is the first attraction",
      position: [2, 1.5, -1.5],
    },
    {
      id: "2",
      name: "Attraction 2",
      description: "This is the second attraction",
      position: [0, 1.5, 0],
    },
    {
      id: "3",
      name: "Attraction 3",
      description: "This is the third attraction",
      position: [-2, 1.5, 1.5],
    },
  ],
  isSidebarOpen: false,
  selectedAttraction: null,
  showControlsPopup: true,
});
