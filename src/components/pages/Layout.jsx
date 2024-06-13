import {Header} from "../navigation/header/Header.jsx";
import {Footer} from "../navigation/footer/Footer.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <div className="jumbotron">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}