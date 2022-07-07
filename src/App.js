import Dashboard from "components/dashboard.component";
import Form from "components/task-form.component";
import LoginForm from "components/login-form.component";
import RegisterForm from "components/register-form.component";
import Header from "components/header.component";
import SideBar from "components/sidebar.component";
import { AuthProvider } from "contexts/auth-context";

function App() {
  return (
    <AuthProvider>
      <div className="app h-screen mx-auto">
        <Header />
        {/* <div className="main w-100 grid grid-cols-1 grid-rows-layout md:grid-rows-1 md:grid-cols-layout">
        <SideBar />
        <Dashboard />
      </div> */}
        <RegisterForm />
      </div>
    </AuthProvider>
  );
}

export default App;
