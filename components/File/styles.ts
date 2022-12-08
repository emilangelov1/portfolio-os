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
  padding: 15px;
  width: 120px;
`;

export const FolderText = styled("span")<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "windows95";
  font-size: 16px;
  font-weight: 500;
  background-color: ${({ active }) => (active ? "#4e4759" : "transparent")};
`;

export const StyledImage = styled(Image)<{
  active: boolean;
}>`
  height: 48px;
  width: 48px;
  padding: 2px;
  background-color: ${({ active }) => (active ? "#4e4759" : "transparent")};
`;
