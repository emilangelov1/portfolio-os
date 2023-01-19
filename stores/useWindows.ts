import create from "zustand";
import { Position, Window } from "./types";
import { persist } from "zustand/middleware";

type WindowStore = {
  windows: Array<Window>;
  files: { [id: string]: Position };
  setFilePosition: (id: string, position: Position) => void;
  push: (window: Window) => void;
  close: (id: string) => void;
  minimize: (id: string) => void;
  maximize: (id: string) => void;
  fullscreen: (id: string) => void;
  setPosition: (id: string, position: Position) => void;
};

export const useWindows = create(
  persist<WindowStore>(
    (set) => ({
      windows: [],
      files: {},
      setFilePosition: (id, position) =>
        set(({ files }) => ({
          files: { ...files, [id]: position },
        })),
      setPosition: (id, position) =>
        set(({ windows }) => {
          const index = windows.findIndex((e) => e.id === id);
          if (index !== -1) {
            const newWindows = [...windows];
            newWindows[index] = {
              ...newWindows[index],
              position: position,
            };
            return { windows: newWindows };
          }
          return { windows };
        }),
      push: (window) =>
        set(({ windows }) => {
          const foundIndex = windows.findIndex((e) => e.id === window.id);
          if (foundIndex !== -1) {
            const newWindows = [...windows];
            newWindows[foundIndex] = {
              ...newWindows[foundIndex],
              isMinimized: false,
            };
            return {
              windows: newWindows,
            };
          }
          return { windows: [...windows, window] };
        }),
      close: (id) =>
        set(({ windows }) => ({
          windows: windows.filter((window) => window.id !== id),
        })),
      minimize: (id) =>
        set(({ windows }) => ({
          windows: windows.map((window) =>
            window.id === id ? { ...window, isMinimized: true } : window
          ),
        })),
      fullscreen: (id) =>
        set(({ windows }) => ({
          windows: windows.map((window) =>
            window.id === id
              ? { ...window, isFullscreen: !window.isFullscreen }
              : window
          ),
        })),
      maximize: (id) =>
        set(({ windows }) => ({
          windows: windows.map((window) =>
            window.id === id ? { ...window, isMinimized: false } : window
          ),
        })),
    }),
    {
      name: "folder-position",
    }
  )
);
