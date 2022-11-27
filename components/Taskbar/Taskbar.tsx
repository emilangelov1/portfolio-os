import {
  FoldersContainer,
  SingleFolder,
  StyledTaskbarIcon,
  TaskbarContainer,
  TimeContainer,
} from "./styles";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Folders } from "@store/store";

type TaskbarP = {
  folders: Folders["folders"];
};

export const Taskbar = ({ folders }: TaskbarP) => {
  const [now, setNow] = useState<string>();
  useEffect(() => {
    const x = setInterval(() => {
      setNow(dayjs().format("hh:mm A"));
    }, 100);
    return () => {
      clearInterval(x);
    };
  }, [now, setNow]);
  return (
    <TaskbarContainer>
      <FoldersContainer>
        {folders?.map((e) => {
          return (
            <SingleFolder key={e.id}>
              <StyledTaskbarIcon src={e.icon} alt="icon" />
              {e.name}
            </SingleFolder>
          );
        })}
      </FoldersContainer>
      <TimeContainer>{now}</TimeContainer>
    </TaskbarContainer>
  );
};
