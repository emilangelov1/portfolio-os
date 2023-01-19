import { StaticImageData } from "next/image";
import { FolderContainer, FolderText, StyledImage } from "./styles";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import Draggable from "react-draggable";

type FolderP = {
  name: string;
  icon?: StaticImageData;
  id: string;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
  onDoubleClick: VoidFunction;
};

export const File = ({
  name,
  icon,
  id,
  position,
  setPosition,
  onDoubleClick,
}: FolderP) => {
  const { toggle, value } = useBoolean();
  const ref = useRef(null);
  const handleClickOutside = () => {
    if (value) {
      toggle();
    }
    return;
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <Draggable
      onDrag={(e: any) => setPosition({ x: e.movementX, y: e.movementY })}
      position={position}
    >
      <FolderContainer
        onDoubleClick={() => {
          onDoubleClick();
        }}
        onClick={toggle}
        ref={ref}
      >
        <StyledImage
          draggable={false}
          active={value}
          src={icon ?? ""}
          alt="folder"
        ></StyledImage>
        <FolderText active={value}>{name}</FolderText>
      </FolderContainer>
    </Draggable>
  );
};
