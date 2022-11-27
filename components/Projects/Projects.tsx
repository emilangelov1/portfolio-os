import { FolderButton } from "../FolderButton";
import folder from "../../assets/folder.png";
import { useBoolean } from "usehooks-ts";
import { FileExplorer } from "../FileExplorer/FileExplorer";

export const Projects = () => {
  const { value, toggle } = useBoolean();
  return (
    <>
      <FolderButton onDoubleClick={toggle} name="Projects" icon={folder} />
      <FileExplorer active={value} title="Projects" close={toggle} />
    </>
  );
};
