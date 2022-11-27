import { StaticImageData } from "next/image";
import { FolderContainer, FolderText, StyledImage } from "./styles";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import { useId, useRef } from "react";
import Draggable from "react-draggable";
import { useFolders } from "@store/store";

type FolderP = {
  name: string;
  icon: StaticImageData;
  onDoubleClick: VoidFunction;
};

export const FolderButton = ({ name, icon, onDoubleClick }: FolderP) => {
  const { setFolder } = useFolders();
  const { toggle, value } = useBoolean();
  const ref = useRef(null);
  const handleClickOutside = () => {
    if (value) {
      toggle();
    }
    return;
  };
  useOnClickOutside(ref, handleClickOutside);
  const id = useId();
  return (
    <Draggable>
      <FolderContainer
        onDoubleClick={() => {
          setFolder({
            icon,
            id,
            name,
          });
          onDoubleClick();
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
