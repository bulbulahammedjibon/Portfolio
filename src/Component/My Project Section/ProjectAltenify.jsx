import { Link } from "react-router-dom";
const ProjectAlternify = () => {
  return (
    <>
      <div className="flex justify-center my-20 gap-x-60">
        <div>
          <img
            src="../../../public/asset/Alternatify.png"
            className="w-80"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-2xl font-medium">Web Development</h2>
          <p>This is my Find Alternative Solution website </p>
          <Link to="https://assigment-11-e05fa.web.app">
            {" "}
            <button className="btn-outline btn my-5"> View Details</button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectAlternify;
