import { StaticImageData } from "next/image";
import { FolderContainer, FolderText, StyledImage } from "./styles";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import Draggable from "react-draggable";
import { useFolders } from "@store/useFolders";

type FolderP = {
  name: string;
  icon: StaticImageData;
  id: string;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }, id: string) => void;
};

export const File = ({ name, icon, id, position, setPosition }: FolderP) => {
  const { setFolder, shortcuts, removeFolder } = useFolders();
  const { toggle, value } = useBoolean();
  const ref = useRef(null);
  const handleClickOutside = () => {
    if (value) {
      toggle();
    }
    return;
  };
  useOnClickOutside(ref, handleClickOutside);
  // if (!position.x) return <div />;
  return (
    <Draggable
      onStop={(position) =>
        setPosition(
          {
            x: position.x,
            y: position.y,
          },
          id
        )
      }
      defaultPosition={position}
    >
      <FolderContainer
        onDoubleClick={() => {
          setFolder({
            icon,
            id,
            name,
          });
          if (shortcuts.find((e) => e.id === id)) {
            removeFolder(id);
          }
        }}
        onClick={toggle}
        ref={ref}
      >
        <StyledImage
          draggable={false}
          active={value}
          src={icon}
          alt="folder"
        ></StyledImage>
        <FolderText active={value}>{name}</FolderText>
      </FolderContainer>
    </Draggable>
  );
};
