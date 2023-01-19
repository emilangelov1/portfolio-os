import { PropsWithChildren } from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import {
  Button,
  ButtonContainer,
  Children,
  FileExplorerContainer,
  Header,
  Resize,
  Title,
} from "./styles";

type FileExplorerP = {
  title: string;
  onClose: () => void;
  id: string;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
  fullscreen: boolean;
  onFullscreen: () => void;
  onMinimize: () => void;
};

export const FileExplorer = ({
  title,
  children,
  onClose,
  onFullscreen,
  onMinimize,
  id,
  position,
  setPosition,
  fullscreen,
}: PropsWithChildren<FileExplorerP>) => {
  return (
    <Draggable
      position={fullscreen ? { x: 0, y: 0 } : position}
      onDrag={(e: any) => setPosition({ x: e.movementX, y: e.movementY })}
      handle=".header"
      disabled={fullscreen === true}
    >
      <FileExplorerContainer fullscreen={fullscreen}>
        <Header fullscreen={fullscreen} className="header">
          <Title>{title}</Title>
          <ButtonContainer>
            <Button onClick={onMinimize}>_</Button>
            <Button onClick={onFullscreen}>|_|</Button>
            <Button onClick={onClose}>X</Button>
          </ButtonContainer>
        </Header>
        <Children>{children}</Children>
        <Resize />
      </FileExplorerContainer>
    </Draggable>
  );
};
