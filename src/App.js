import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import MenuPage from "./pages/menuPage/MenuPage";
import BookingPage from "./pages/bookingPage/BookingPage";
import OrderOnlinePage from "./pages/orderOnlinePage/OrderOnlinePage";
import LoginPage from "./pages/loginPage/LoginPage";
import UserInfo from "./components/booking/userInfo/UserInfo";
import ReserveDate from "./components/booking/reserveDate/ReserveDate";
import ReserveTable from "./components/booking/reserveTable/ReserveTable";
import {useReducer} from "react";
import {dataBooking, bookingReducer} from "./reducers/BookingReducer";
import Confirmation from "./components/booking/confirmation/Confirmation";
import CompleteNotification from "./components/booking/completeNotification/CompleteNotification";

function App() {


    const [bookingData, dispatch] = useReducer(bookingReducer, dataBooking);
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/menu"} element={<MenuPage />} />
                    <Route path={"/booking"} element={<BookingPage />} >
                        <Route index element={<UserInfo dispatch={dispatch} />} />
                        <Route path={"/booking/fill-date-info"} element={<ReserveDate dispatch={dispatch} />} />
                        <Route path={"/booking/fill-table-info"} element={<ReserveTable dispatch={dispatch} />} />
                        <Route path={"/booking/confirmation"} element={<Confirmation bookingData={bookingData} />} />
                        <Route path={"/booking/complete"} element={<CompleteNotification bookingId={bookingData.bookingId} />} />
                    </Route>
                    <Route path={"/order-online"} element={<OrderOnlinePage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
