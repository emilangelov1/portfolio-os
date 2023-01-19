import { Taskbar } from "@components/Taskbar";
import { styled } from "goober";
import { shortcuts as files } from "@store/files";
import { File } from "@components/File";
import { useWindows } from "@store/useWindows";
import { FileExplorer } from "@components/FileExplorer";

const Container = styled("div")`
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  const {
    close,
    fullscreen,
    maximize,
    minimize,
    push,
    windows,
    setPosition,
    setFilePosition,
    files: filesPosition,
  } = useWindows();
  return (
    <Container>
      <>
        {files.map((e) => {
          const foundPosition = filesPosition[e.id];
          return (
            <File
              position={foundPosition}
              icon={e.icon ?? undefined}
              key={e.id}
              id={e.id}
              name={e.name}
              setPosition={(position) => {
                console.log(e.position);
                setFilePosition(e.id, {
                  x: position.x + foundPosition?.x ?? 0,
                  y: position.y + foundPosition?.y ?? 0,
                });
              }}
              onDoubleClick={() =>
                push({
                  id: e.id,
                  position: { x: 0, y: 0 },
                  size: { x: 200, y: 200 },
                  title: e.name,
                  type: e.type,
                  isFullscreen: false,
                  isMinimized: false,
                  icon: e.icon,
                })
              }
            />
          );
        })}
        {windows
          .filter((e) => !e.isMinimized)
          .map((e) => {
            return (
              <FileExplorer
                key={`${e.id}-fileExplorer`}
                fullscreen={e.isFullscreen ?? false}
                id={e.id}
                onClose={() => close(e.id)}
                onFullscreen={() => fullscreen(e.id)}
                onMinimize={() => minimize(e.id)}
                position={e.position}
                setPosition={(position) =>
                  setPosition(e.id, {
                    x: position.x + e.position.x,
                    y: position.y + e.position.y,
                  })
                }
                title={e.title}
              />
            );
          })}
        <Taskbar
          folders={windows.map((e) => ({
            icon: e.icon,
            id: e.id,
            position: e.position,
            type: e.type,
            clicked: !e.isMinimized,
            name: e.title,
            onFolderClick: () => {
              if (e.isMinimized) {
                return maximize(e.id);
              }
              return minimize(e.id);
            },
          }))}
        />
      </>
    </Container>
  );
}
