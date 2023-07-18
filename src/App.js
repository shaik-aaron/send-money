import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className={"main-container"}>
        <SideNav />
        <div className="content">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
