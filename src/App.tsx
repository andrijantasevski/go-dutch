import "./App.css";
import './index.css'
import TitleLogo from "./components/TitleLogo";
import Container from "./components/Container";

function App() {
  return <div className="h-screen flex flex-col justify-center items-center gap-5">
    <TitleLogo />
    <Container />
  </div>;
}

export default App;
