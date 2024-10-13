import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="  bg-gray-100 min-h-screen">
      <div className="  flex justify-center  gap-24 lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/2gYWyNk/pic.jpg"
          className="max-w-lg  my-5 rounded-lg shadow-xl"
        />
        <div className="flex items-center">
          <div>
            <h1 className="text-5xl font-bold">
              <span className="font-normal  ">My Name's</span> <br /> Bulbul
              Ahemmed
            </h1>
            <p className="py-6">I am a junior web developer</p>
            <Link to="/project">
              <button className="btn btn-primary">Project</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
