import "./App.css";
import FeedCard from "./FeedCard.jsx";
import CustomButton from "./components/Button/CustomButton";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <FeedCard />
      </div>
      <div>
        <CustomButton text="Get Started" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
