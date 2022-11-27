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

type FileExplorerP = {
  active: boolean;
  title: string;
  close: VoidFunction;
};

export const FileExplorer = ({
  active,
  title,
  children,
  close,
}: PropsWithChildren<FileExplorerP>) => {
  const { toggle, value: fullscreen } = useBoolean();
  return (
    <span>
      {active && (
        <Draggable
          position={fullscreen ? { x: 0, y: 0 } : undefined}
          handle=".header"
          disabled={fullscreen === true}
        >
          <FileExplorerContainer fullscreen={fullscreen}>
            <Header fullscreen={fullscreen} className="header">
              <Title>{title}</Title>
              <ButtonContainer>
                <Button>_</Button>
                <Button onClick={toggle}>|_|</Button>
                <Button
                  onClick={() => {
                    if (fullscreen) {
                      toggle();
                    }
                    close();
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
