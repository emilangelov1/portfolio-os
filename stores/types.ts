import { StaticImageData } from "next/image";

export type Shortcut = {
  id: string;
  icon: StaticImageData;
  name: string;
};

type WindowType = "browser" | "folder" | "notepad";

export type Window = {
  id: string;
  type: WindowType;
  title: string;
  isFullscreen?: boolean;
  isMinimized?: boolean;
};
