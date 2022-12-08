import { persist } from "zustand/middleware";
import create from "zustand";

type Position = {
  x: number;
  y: number;
};

type FolderPositions = {
  positions?: Array<{ [id: string]: Position }>;
  setPosition: (position: { [id: string]: Position }) => void;
};

export const useFolderPosition = create<FolderPositions>(
  // persist<FolderPositions>(
  (set) => ({
    positions: [],
    setPosition: (position) =>
      set(({ positions }) => ({
        positions: [...positions, position],
      })),
  })
  // {
  //   name: "folder-position",
  // }
);
// );
