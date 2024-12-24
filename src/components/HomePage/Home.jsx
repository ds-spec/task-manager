import { useNavigate } from "react-router-dom";
import "./Home.css";
import assets from "../../assets/assets";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="home-container">
      <div id="nav">
        <div className="flex ">
        <img src={assets.logo}/>
          {/* <h4>Task Tracker</h4> */}
          <div id="nav-center" className="flex items-center gap-[20px]">
            <h5 className="font-normal text-sm uppercase cursor-pointer relative text-black">
              Main
            </h5>
            <h5 className="font-normal text-sm uppercase cursor-pointer relative text-black">
              Features
            </h5>
            <h5 className="font-normal text-sm uppercase cursor-pointer relative text-black">
              Reviews
            </h5>
            <h5 className="font-normal text-sm uppercase cursor-pointer relative text-black">
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
      <div id="home-content">
        <h3>The essentials for you</h3>
        <div id="box"></div>
        <div id="home-subitem">
          <h5>Start taking control of your life from now on.</h5>
          <h5>No more excuses, just action.</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
