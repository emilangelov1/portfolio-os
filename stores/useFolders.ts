import create from "zustand";
import { Shortcut } from "./types";

export type Folders = {
  shortcuts: Array<Shortcut>;
  setFolder: (shortcut: Shortcut) => void;
  removeFolder: (id: string) => void;
};

export const useFolders = create<Folders>((set) => ({
  shortcuts: [],
  setFolder: (shortcut) =>
    set(({ shortcuts }) => ({
      shortcuts: [...shortcuts, shortcut],
    })),
  removeFolder: (id) =>
    set(({ shortcuts }) => ({
      shortcuts: shortcuts.filter((e) => e.id !== id),
    })),
}));
