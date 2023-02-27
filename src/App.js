import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <TitleBar className="title-bar" />
      <div className="container">
        <div style={{ width: "230px" }}>
          <SideBar className="side-bar" />
        </div>
        <Main className="main" />
      </div>
    </div>
  );
};

export default App;
