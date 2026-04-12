import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  isBlog: boolean;
  demoLink?: string;
}

export default function ProjectCards(props: ProjectCardProps) {
  return (
    <div className="project-card-view flex flex-col rounded-lg overflow-hidden border border-[rgba(200,137,230,0.3)]">
      <img src={props.imgPath} alt="card-img" className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-center mb-4">{props.title}</h3>
        <p className="text-justify mb-6 flex-grow text-gray-300">
          {props.description}
        </p>
        <div className="flex justify-center gap-4 mt-auto">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 rounded flex items-center gap-2 transition-colors"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
