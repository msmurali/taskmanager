import { Routes, Route } from "react-router-dom";
import { useTheme } from "contexts/theme-context";
import { ThemeMode } from "contexts/theme-context";
import {
  Dashboard,
  Header,
  Home,
  LoginForm,
  RegisterForm,
  Search,
  Settings,
  TaskForm,
  TaskPage,
} from "components";

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
