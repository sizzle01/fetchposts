import "./App.css";
import FeedCard from "./FeedCard.jsx";
import CustomButton from "./components/Button/CustomButton";

function App() {
  return (
    <>
      <div className="App">
        <FeedCard />
      </div>
      <div>
        <CustomButton text="Get Started" />
      </div>
    </>
  );
}

export default App;
