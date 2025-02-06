import { observable } from "@legendapp/state";

interface Attraction {
  id: string;
  name: string;
  description: string;
  position: [number, number, number];
  images?: string[];
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
      name: "NABU & Obst/Gartenbau Verein",
      description:
        "Der Naturschutzbund Kleestadt und der Obst und Gartenbauverein machen zum dritten Mal einen Stand zusammen auf unserem Kläschter Dorffest. Hier werden Backfisch, Kartoffelsalat und Getränke angeboten.",
      position: [1.9, 1.5, -2],
      images: [
        "./attractions/attraction_1_1.jpeg",
        "./attractions/attraction_1_2.jpeg",
        "./attractions/attraction_1_3.jpeg",
      ],
    },
    {
      id: "2",
      name: "Feuerwehr Kleestadt",
      description: "Biertheke",
      position: [1.75, 1.5, -3],
    },
    {
      id: "3",
      name: "La Dolce Vita Pizza",
      description: "Angelo's Pizza",
      position: [2.25, 1.5, -3.5],
    },

    {
      id: "4",
      name: "Bühne",
      description: "Bühnenprogramm:",
      position: [3.5, 1.5, -2],
    },

    {
      id: "5",
      name: "Kirche & Förderverein",
      description: "Kaffee und Kuchen",
      position: [1.5, 1.5, -0.75],
    },

    {
      id: "6",
      name: "Computer Clube Kleestadt",
      description: "Crepes, Eis und Schnaps",
      position: [0.5, 1.5, 0],
    },

    {
      id: "7",
      name: "Restaurant zum Lamm",
      description: "Pommes und Bratwurst",
      position: [-0.75, 1.5, 1],
    },

    {
      id: "8",
      name: "SV Kleestadt",
      description: "Bier, Hütchen, Tabletts ",
      position: [-1.4, 1.5, 1.5],
    },

    {
      id: "9",
      name: "Gymnastikverein Kleestadt",
      description: "Äpperol und Gedöns",
      position: [-1.5, 1.5, 1],
    },

    {
      id: "9",
      name: "Aphrodite Spezialitäten",
      description: "Halloumi Sandwiches",
      position: [-1, 1.5, 0.6],
    },
  ],
  isSidebarOpen: false,
  selectedAttraction: null,
  showControlsPopup: true,
});
