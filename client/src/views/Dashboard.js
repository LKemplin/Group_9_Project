import NavBar from "../components/NavBar";
import SongQuotesCards from "../components/SongQuotesCards";

const Dashboard = (props) => {
  const { songCards, setSongCards } = props;
  console.log(props)
  return (
    <div>
      <NavBar />
      <br></br>
      <div>
        <SongQuotesCards songCards={songCards} setSongCards={setSongCards} />
      </div>
    </div>
  );
};

export default Dashboard;
