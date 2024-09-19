import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
//import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BoardPage from "./pages/BoardPage/BoardPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ParticipantsPage from "./pages/ParticipantsPage/ParticipantsPage";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BoardPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="participants" element={<ParticipantsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ToastContainer />
      {/* <GlobalStyle /> */}
    </div>
  );
};