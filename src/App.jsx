import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import MyHeader from "./Components/MyHeader";
import FilmSection from "./Components/FilmSection";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App bg-dark">
      <TopBar />
      <MyHeader />
      <FilmSection title="Trending Now" saga="star wars" />
      <FilmSection title="Watch It Again" saga="transformers" />
      <FilmSection title="New Releases" saga="lord rings" />
      <MyFooter />
    </div>
  );
}

export default App;
