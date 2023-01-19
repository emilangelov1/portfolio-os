import { StaticImageData } from "next/image";

export type Position = {
  x: number;
  y: number;
};

type WindowType = "browser" | "folder" | "notepad";

export type Shortcut = {
  id: string;
  type: WindowType;
  icon: StaticImageData;
  name: string;
  position: Position;
};

export type Window = {
  icon?: StaticImageData;
  id: string;
  type: WindowType;
  title: string;
  isFullscreen?: boolean;
  isMinimized?: boolean;
  position: Position;
  size: Position;
};
