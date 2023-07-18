import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <SideNav />
                <Main />
            </div>
        </div>
    );
}

export default App;
