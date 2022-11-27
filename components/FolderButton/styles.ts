import { styled } from "goober";
import Image from "next/image";
import { forwardRef } from "react";

export const FolderContainer = styled("button", forwardRef)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  gap: 10px;
  border: none;
  user-select: none;
`;

export const FolderText = styled("span")<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? "white" : "black")};
  width: 100%;
  font-family: "windows95";
  font-size: 16px;
  background-color: ${({ active }) => (active ? "blue" : "transparent")};
`;

export const StyledImage = styled(Image)<{
  active: boolean;
}>`
  height: 46px;
  width: 100%;
  background-color: ${({ active }) => (active ? "blue" : "transparent")};
`;
