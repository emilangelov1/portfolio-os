import { css, styled } from "goober";
import Image from "next/image";

export const TaskbarContainer = styled("div")`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  padding: 0px 5px;
  width: 100%;
  background-color: #c0c0c0;
  height: 45px;
  border-top: 3px solid white;
  user-select: none;
`;

export const TimeContainer = styled("div")`
  padding: 5px;
  display: flex;
  font-family: "windows95";
  color: black;
  border-left: 3px solid grey;
  border-top: 3px solid grey;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  border-radius: 2px;
`;

export const FoldersContainer = styled("div")`
  display: flex;
  flex: 1;
  gap: 5px;
`;

export const SingleFolder = styled("div")<{ clicked?: boolean }>`
  display: flex;
  width: 200px;
  height: 35px;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: black;
  cursor: pointer;
  font-family: "windows95";
  ${({ clicked }) =>
    clicked
      ? `
            border-left: 3px solid black;
            border-top: 3px solid black;
            border-right: 3px solid white;
            border-bottom: 3px solid white;
            font-weight: 1000;
          `
      : `
            border-left: 3px solid white;
            border-top: 3px solid white;
            border-right: 3px solid black;
            border-bottom: 3px solid black;
          `}
  border-radius: 2px;
`;

export const StyledTaskbarIcon = styled(Image)`
  height: 25px;
  width: 25px;
`;
