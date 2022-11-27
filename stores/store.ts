import { StaticImageData } from "next/image";
import create from "zustand";

type SingleFolder = {
  id: string;
  icon: StaticImageData;
  name: string;
};

export type Folders = {
  folders: Array<SingleFolder>;
  setFolder: (folder: SingleFolder) => void;
};

export const useFolders = create<Folders>((set) => ({
  folders: [],
  setFolder: (folder) =>
    set(({ folders }) => ({
      folders: [...folders, folder],
    })),
}));
