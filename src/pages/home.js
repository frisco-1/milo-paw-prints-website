import { Link } from "react-router-dom";
import Header from "./Header/header";

function Home() {
  return (
    <div>
      <Header />
      <Link to="/dtf"> DFT</Link>
    </div >


  )

}
export default Home;