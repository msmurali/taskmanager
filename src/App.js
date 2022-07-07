import Dashboard from "components/dashboard.component";
import Header from "components/header.component";
import SideBar from "components/sidebar.component";
import Task from "components/task.component";
import "./app.css";

function App() {
  return (
    <div className="app h-screen">
      <Header />
      <div className="main w-100 grid grid-cols-1 grid-rows-layout md:grid-rows-1 md:grid-cols-layout">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
