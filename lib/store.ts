import { Vector3 } from "@react-three/fiber";
import { LucideIcon } from "lucide-react";
import { observable } from "@legendapp/state";

interface Attraction {
  id: string;
  name: string;
  description: string;
  markerPosition: Vector3;
  markerIcon: LucideIcon;
}

interface AppState {
  isSidebarOpen: boolean;
  selectedAttraction: Attraction | null;
  attractions: Attraction[];
}

export const appState$ = observable<AppState>({
  attractions: [],
  isSidebarOpen: false,
  selectedAttraction: null,
});
