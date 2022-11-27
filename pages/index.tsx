import { Projects } from "@components/Projects";
import { Taskbar } from "@components/Taskbar";
import { useFolders } from "@store/store";
import { styled } from "goober";
import folder from "../assets/folder.png";

const Container = styled("div")`
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  const { folders } = useFolders();
  return (
    <Container>
      <Projects />
      <Taskbar folders={folders} />
    </Container>
  );
}
