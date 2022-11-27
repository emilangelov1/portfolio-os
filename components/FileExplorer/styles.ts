import { styled } from "goober";

export const FileExplorerContainer = styled("div")<{
  fullscreen?: boolean;
}>`
  font-family: "windows95";
  width: ${({ fullscreen }) => (fullscreen ? "100vw" : "800px")};
  height: ${({ fullscreen }) => (fullscreen ? "100vh" : "500px")};
  position: fixed;
  top: ${({ fullscreen }) => (fullscreen ? "0px" : undefined)};
  left: ${({ fullscreen }) => (fullscreen ? "0px" : undefined)};
  background-color: #c0c0c0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  padding: 3px 3px 3px 3px;
  user-select: none;
  border-left: 3px solid white;
  border-top: 3px solid white;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  flex-direction: column;
  gap: 10px;
  resize: both;
  overflow: auto;
`;

export const Header = styled("div")<{ fullscreen?: boolean }>`
  display: flex;
  width: 100%;
  align-self: flex-start;
  align-items: center;
  padding: 4px;
  background: rgb(9, 0, 163);
  background: linear-gradient(
    90deg,
    rgba(9, 0, 163, 1) 0%,
    rgba(0, 0, 255, 1) 100%
  );
  ${({ fullscreen }) =>
    !fullscreen
      ? `
          cursor: grab;
        `
      : undefined}
`;

export const Title = styled("div")`
  display: flex;
  flex: 1;
  font-weight: 500;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  gap: 5px;
`;

export const Button = styled("div")`
  background-color: #c0c0c0;
  cursor: pointer;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  border-left: 2px solid white;
  border-top: 2px solid white;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  &:active {
    border: none;
  }
`;

export const Children = styled("div")`
  display: flex;
  background-color: white;
  border-left: 2px solid black;
  border-top: 2px solid black;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  height: 100%;
  width: 100%;
`;

export const Resize = styled("div")`
  display: flex;
  height: 15px;
  width: 100%;
`;
