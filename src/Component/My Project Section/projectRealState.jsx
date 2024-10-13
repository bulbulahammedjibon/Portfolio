import { Link } from "react-router-dom";
const ProjectRealState = () => {
  return (
    <>
      <div className="flex justify-center my-20 gap-x-60">
        <div>
          <h2 className="text-2xl font-medium">Web Development</h2>
          <p>This is my Real-state Website </p>
          <Link to="https://real-state-assigment-12.web.app/">
            {" "}
            <button className="btn-outline btn my-5"> View Details</button>{" "}
          </Link>
        </div>

        <div>
          <img
            src="../../../public/asset/Real-state.png"
            className="w-80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectRealState;
