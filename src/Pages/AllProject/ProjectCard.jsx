import { Link } from "react-router-dom";
const ProjectCard = ({ img, title, links }) => {
  return (
    <Link
      to={links}
      className="block shadow-lg rounded-lg p-4 shadow-sm shadow-indigo-100"
    >
      <img src={img} className="h-56 w-full rounded-md object-cover" />

      <div className="mt-2">
        <h2>{title}</h2>
      </div>

      <div>
        <button className="btn bg-green-400">Go Live Website</button>
      </div>
    </Link>
  );
};

export default ProjectCard;
