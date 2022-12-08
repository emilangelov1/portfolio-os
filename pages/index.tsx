import { Taskbar } from "@components/Taskbar";
import { useFolders } from "@store/useFolders";
import { styled } from "goober";
import { shortcuts as files } from "@store/files";
import { File } from "@components/File";
import { useFolderPosition } from "@store/useFolderPosition";
import Draggable from "react-draggable";
import { FileExplorer } from "@components/FileExplorer";

const Container = styled("div")`
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  const { shortcuts, removeFolder } = useFolders();
  const { positions, setPosition } = useFolderPosition();
  console.log(positions);
  return (
    <Container>
      <>
        {files.map((e) => {
          return (
            <>
              <File
                setPosition={(position, id) =>
                  id === e.id ? setPosition({ id: position }) : {}
                }
                position={{ x: 0, y: 0 }}
                icon={e.icon}
                id={e.id}
                name={e.name}
              />
              <FileExplorer
                position={{ x: 0, y: 0 }}
                setPosition={(position, id) =>
                  id === e.id ? setPosition({ id: position }) : {}
                }
                id={e.id}
                close={(id) => removeFolder(id)}
                title={e.name}
                active={(id) => shortcuts.some((e) => e.id === id)}
              />
            </>
          );
        })}
        <Taskbar
          folders={shortcuts.map((e) => ({
            icon: e.icon,
            id: e.id,
            clicked: true,
            name: e.name,
            onFolderClick: () => console.log("folderClick"),
          }))}
        />
      </>
    </Container>
  );
}
