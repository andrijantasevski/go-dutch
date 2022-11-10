import "./App.css";
import './index.css'
import TitleLogo from "./components/TitleLogo";
import Container from "./components/Container";

function App() {
  return <div className="py-10 lg:py-0 lg:h-screen flex flex-col justify-center items-center gap-5">
    <TitleLogo />
    <Container />
  </div>;
}

export default App;
