import { useNavigate } from "react-router-dom";
import "./Home.css";
import assets from "../../assets/assets";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="home-container">
      <div id="nav">
        <div className="flex gap-6">
          <img src={assets.logo} className="w-16 aspect-square" />
          {/* <h4>Task Tracker</h4> */}
          <div id="nav-center" className="flex items-center gap-[25px]">
            <h5 className="font-medium text-[1vw] uppercase cursor-pointer relative text-black">
              Main
            </h5>
            <h5 className="font-medium text-[1vw] uppercase cursor-pointer relative text-black">
              Features
            </h5>
            <h5 className="font-medium text-[1vw] uppercase cursor-pointer relative text-black">
              Reviews
            </h5>
            <h5 className="font-medium text-[1vw] uppercase cursor-pointer relative text-black">
              FAQ
            </h5>
          </div>
        </div>
        <div className="bg-white rounded-full py-1 px-1">
          <button
            className="px-8 py-2 text-sm bg-white uppercase text-black rounded-full"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-8 py-2 text-sm bg-black uppercase text-white rounded-full"
            onClick={() => navigate("/login")}
          >
            Sign up
          </button>
        </div>
      </div>
      <div
        id="home-content"
        className="w-[95%] m-auto mt-5 bg-[#D5DAF4] rounded-[2.6vw]"
      >
        <video
          className="rounded-[2.6vw] w-full"
          src={assets.video}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="mt-4 px-9">
        <h1 className="text-[7.5rem] uppercase tracking-wider font-extrabold">
          one app. whole process
        </h1>
      </div>
      <div className="flex justify-between items-center px-6">
        <h5 className="text-lg">{`{GOALS}`}</h5>
        <h5 className="text-lg">{`{DOCS}`}</h5>
        <h5 className="text-lg">{`{TASKS}`}</h5>
        <h5 className="text-lg">{`{CHAT}`}</h5>
        <h5 className="text-lg">{`{MORE}`}</h5>
      </div>
    </div>
  );
};

export default Home;
