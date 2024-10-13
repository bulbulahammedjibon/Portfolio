import ProjectAlternify from "./ProjectAltenify";
import ProjectRealState from "./projectRealState";
import ProjectTravel from "./ProjectTravel";

const MyProjectSection = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium">My Project</h2>
        <p>This is My Project </p>
      </div>

      <ProjectTravel />
      <ProjectAlternify />
      <ProjectRealState />
    </div>
  );
};

export default MyProjectSection;
