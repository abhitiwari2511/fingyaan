import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Schemes from "./pages/Schemes";
import Learning from "./pages/Learning";
import Advice from "./pages/Advice";
import Tracker from "./pages/Tracker";

const App = () => {
  return (
    <div className="mx-auto flex justify-center w-full h-full bg-zinc-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/govt-schemes" element={<Schemes />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/learning-resources" element={<Learning />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/investment-advice" element={<Advice />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/expense-tracker" element={<Tracker />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
