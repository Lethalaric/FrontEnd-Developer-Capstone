import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import MenuPage from "./pages/menuPage/MenuPage";
import ReservationPage from "./pages/reservationPage/ReservationPage";
import OrderOnlinePage from "./pages/orderOnlinePage/OrderOnlinePage";
import LoginPage from "./pages/loginPage/LoginPage";
import UserInfo from "./components/reservation/userInfo/UserInfo";
import ReserveDate from "./components/reservation/reserveDate/ReserveDate";
import ReserveTable from "./components/reservation/reserveTable/ReserveTable";
import {useReducer} from "react";
import {dataReservation, reducer} from "./reducer/ReservationReducer";
import Confirmation from "./components/reservation/confirmation/Confirmation";

function App() {


    const [reservationData, dispatch] = useReducer(reducer, dataReservation);
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/menu"} element={<MenuPage />} />
                    <Route path={"/reservation"} element={<ReservationPage />} >
                        <Route index element={<UserInfo dispatch={dispatch} />} />
                        <Route path={"/reservation/fill-date-info"} element={<ReserveDate dispatch={dispatch} />} />
                        <Route path={"/reservation/fill-table-info"} element={<ReserveTable dispatch={dispatch} />} />
                        <Route path={"/reservation/confirmation"} element={<Confirmation reservationData={reservationData} />} />
                    </Route>
                    <Route path={"/order-online"} element={<OrderOnlinePage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
