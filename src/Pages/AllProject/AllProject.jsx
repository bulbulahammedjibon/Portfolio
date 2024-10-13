import Navbar from "../../Component/Navbar";
import Footer from "../../Footer/Footer";
import alternatify from "./../../../public/asset/Alternatify.png";
import realstate from "./../../../public/asset/Real-state.png";
import travel from "./../../../public/asset/TravelWebsite.png";
import ProjectCard from "./ProjectCard";
const AllProject = () => {
  return (
    <>
      <Navbar />
      <div className="grid gap-5 my-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          img={travel}
          links={"https://assigment-10-c8d17.web.app/"}
          title={"This is Website"}
        />
        <ProjectCard
          img={alternatify}
          links={"https://assigment-11-e05fa.web.app"}
          title={"This is Website"}
        />
        <ProjectCard
          img={realstate}
          links={"https://real-state-assigment-12.web.app/"}
          title={"This is Website"}
        />
      </div>

      <Footer />
    </>
  );
};

export default AllProject;
