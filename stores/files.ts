import { Shortcut, Window } from "./types";
import folder from "@assets/folder.png";
import notepad from "@assets/notepad.png";

export const files: Array<Window> = [
  { type: "folder", id: "projects", title: "Projects" },
  { type: "folder", id: "projects", title: "About_Me.txt" },
];

export const shortcuts: Array<Shortcut> = [
  { icon: folder, id: "projects", name: "Projects" },
  { icon: notepad, id: "aboutMe", name: "About_Me.txt" },
];
