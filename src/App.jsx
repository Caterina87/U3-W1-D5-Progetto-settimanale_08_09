import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import MyHeader from "./Components/MyHeader";
import FilmSection from "./Components/FilmSection";
import SecondFilmSection from "./Components/SecondFilmSection";
import ThirdFilmSection from "./Components/ThirdFilmSection";

function App() {
  return (
    <div className="App bg-dark">
      <TopBar />
      <MyHeader />
      <FilmSection />
      <SecondFilmSection />
      <ThirdFilmSection />
    </div>
  );
}

export default App;
