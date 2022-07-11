import Dashboard from "components/dashboard.component";
import LoginForm from "components/login-form.component";
import RegisterForm from "components/register-form.component";
import Header from "components/header.component";
import { AuthProvider } from "contexts/auth-context";
import { TasksProvider } from "contexts/tasks-context";
import TaskPage from "components/task-page.component";
import TaskForm from "components/task-form.component";
import { Routes, Route } from "react-router-dom";
import Home from "components/home.component";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <div className="app h-screen mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="create" element={<TaskForm />} />
              <Route path="task/:id" element={<TaskPage />} />
              <Route path="edit/:id" element={<TaskForm />} />
            </Route>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Routes>
        </div>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
