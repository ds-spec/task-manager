import "./Home.css";

const Home = () => {
  return (
    <div id="home-container">
      <div id="nav">
        <h4>Task Tracker</h4>
        <div id="nav-center">
          <h5>Main</h5>
          <h5>Features</h5>
          <h5>Reviews</h5>
          <h5>FAQ</h5>
        </div>
        <button>Sign up for free</button>
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
