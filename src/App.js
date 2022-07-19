import Dashboard from "components/dashboard.component";
import LoginForm from "components/login-form.component";
import RegisterForm from "components/register-form.component";
import Header from "components/header.component";
import TaskPage from "components/task-page.component";
import TaskForm from "components/task-form.component";
import { Routes, Route } from "react-router-dom";
import Home from "components/home.component";
import Settings from "components/settings.component";
import { useTheme } from "contexts/theme-context";
import { ThemeMode } from "contexts/theme-context";
import Search from "components/search.component";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`app h-screen mx-auto ${
        theme === ThemeMode.LIGHT ? "bg-white" : "bg-dark"
      }`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create" element={<TaskForm action="create" />} />
          <Route path="task/:id" element={<TaskPage />} />
          <Route path="edit/:id" element={<TaskForm action="edit" />} />
          <Route path="settings" element={<Settings />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
