import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface ProjectCardProps {
  imgPath?: string;
  title: string;
  description: React.ReactNode;
  ghLink?: string;
  isBlog?: boolean;
  demoLink?: string;
  inProgress?: boolean;
  customCover?: React.ReactNode;
}

export default function ProjectCards(props: ProjectCardProps) {
  return (
    <div className="project-card-view flex flex-col rounded-lg overflow-hidden border border-[rgba(200,137,230,0.3)] bg-transparent h-full">
      {props.customCover ? (
        <div className="w-full h-48 sm:h-56 overflow-hidden bg-[#F9F9FA]">
          {props.customCover}
        </div>
      ) : (
        props.imgPath && <img src={props.imgPath} alt="card-img" className="w-full h-48 sm:h-56 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow bg-transparent">
        <h3 className="text-2xl font-bold text-center mb-4">{props.title}</h3>
        <div className="text-justify mb-6 flex-grow text-gray-300 text-sm sm:text-base">
          {props.description}
        </div>
        <div className="flex justify-center gap-4 mt-auto">
          {props.inProgress ? (
            <span className="bg-[#1b1a2ea9] text-[#00e5ff] border border-[#00e5ff]/30 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
              In Progress...
            </span>
          ) : (
            <>
              {props.ghLink && (
                <a
                  href={props.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm sm:text-base"
                >
                  <BsGithub /> &nbsp;
                  {props.isBlog ? "Blog" : "GitHub"}
                </a>
              )}

              {!props.isBlog && props.demoLink && (
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm sm:text-base"
                >
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
