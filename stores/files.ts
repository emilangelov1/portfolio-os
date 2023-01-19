import { Shortcut, Window } from "./types";
import folder from "@assets/folder.png";
import notepad from "@assets/notepad.png";

export const shortcuts: Array<Shortcut> = [
  {
    icon: folder,
    id: "projects",
    name: "Projects",
    position: { x: 0, y: 0 },
    type: "folder",
  },
  {
    icon: notepad,
    id: "aboutMe",
    name: "About_Me.txt",
    position: { x: 0, y: 0 },
    type: "notepad",
  },
];
