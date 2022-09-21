import NavBar from "../components/NavBar";
import SongQuotesCards from "../components/SongQuotesCards";

const Dashboard = (props) => {
  const { songCards, setSongCards } = props;
  console.log(props)
  return (
    <div>
      <NavBar />
      <hr />
      <SongQuotesCards songCards={songCards} setSongCards={setSongCards} />
    </div>
  );
};

export default Dashboard;
