import { PropsWithChildren } from "react";
import Draggable from "react-draggable";
import {
  Button,
  ButtonContainer,
  Children,
  FileExplorerContainer,
  Header,
  Resize,
  Title,
} from "./styles";
import { useBoolean } from "usehooks-ts";
import { useFolders } from "@store/useFolders";

type FileExplorerP = {
  active: (id: string) => boolean;
  title: string;
  close: (id: string) => void;
  id: string;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }, id: string) => void;
};

export const FileExplorer = ({
  active,
  title,
  children,
  close,
  id,
  position,
  setPosition,
}: PropsWithChildren<FileExplorerP>) => {
  const { toggle, value: fullscreen } = useBoolean();
  const { removeFolder } = useFolders();
  return (
    <span>
      {active(id) && (
        <Draggable
          position={fullscreen ? { x: 0, y: 0 } : position}
          onStop={(position) => {
            setPosition({ x: position.x, y: position.y }, id);
          }}
          handle=".header"
          disabled={fullscreen === true}
        >
          <FileExplorerContainer fullscreen={fullscreen}>
            <Header fullscreen={fullscreen} className="header">
              <Title>{title}</Title>
              <ButtonContainer>
                <Button onClick={() => close(id)}>_</Button>
                <Button onClick={toggle}>|_|</Button>
                <Button
                  onClick={() => {
                    if (fullscreen) {
                      toggle();
                    }
                    removeFolder(id);
                    close(id);
                  }}
                >
                  X
                </Button>
              </ButtonContainer>
            </Header>
            <Children>{children}</Children>
            <Resize />
          </FileExplorerContainer>
        </Draggable>
      )}
    </span>
  );
};
