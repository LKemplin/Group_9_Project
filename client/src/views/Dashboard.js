import NavBar from "../components/NavBar";
import SongQuotesCards from "../components/SongQuotesCards";

const Dashboard = (props) => {
  const { songCards, setSongCards } = props;

  return (
    <div>
      <NavBar />
      <br></br>
      <div className="" style={{ border: "2px dotted green" }}>
        <SongQuotesCards songCards={songCards} setSongCards={setSongCards} />
      </div>
    </div>
  );
};

export default Dashboard;
