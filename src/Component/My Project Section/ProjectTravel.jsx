import { Link } from "react-router-dom";
const ProjectTravel = () => {
  return (
    <>
      <div className="flex justify-center my-20 gap-x-60  ">
        <div>
          <h2 className="text-2xl font-medium">Web Development</h2>
          <p>This is my Travel website </p>
          <Link to="https://assigment-10-c8d17.web.app/">
            {" "}
            <button className="btn-outline btn my-5"> View Details</button>{" "}
          </Link>
        </div>

        <div>
          <img
            src="../../../public/asset/TravelWebsite.png"
            className="w-80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectTravel;
