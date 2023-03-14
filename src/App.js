import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import MenuPage from "./pages/menuPage/MenuPage";
import ReservationPage from "./pages/reservationPage/ReservationPage";
import OrderOnlinePage from "./pages/orderOnlinePage/OrderOnlinePage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/menu"} element={<MenuPage />} />
                <Route path={"/reservation"} element={<ReservationPage />} />
                <Route path={"/order-online"} element={<OrderOnlinePage />} />
                <Route path={"/login"} element={<LoginPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
