import Header from "components/header.component";
import SideBar from "components/sidebar.component";

function App() {
  return (
    <div className="app min-h-screen grid grid-rows-layout">
      <Header />
      <div className="w-100 grid grid-cols-layout">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
