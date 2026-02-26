import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>
        NOT ALL THOSE WHO TRAVEL ARE LOST
      </h1>
      <p>– J.R.R Tolkien</p>
      <button onClick={() => navigate("/destinations")}>
        Begin The Ride
      </button>
    </div>
  );
}

export default Home;