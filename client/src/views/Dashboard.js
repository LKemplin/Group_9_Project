import NavBar from "../components/NavBar";
import SongQuotesCards from "../components/SongQuotesCards";

const Dashboard = (props) => {
  const { songCards, setSongCards } = props;
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <br></br>
      <div>
        <SongQuotesCards songCards={songCards} setSongCards={setSongCards} />
      </div>
    </div>
  );
};

export default Dashboard;
