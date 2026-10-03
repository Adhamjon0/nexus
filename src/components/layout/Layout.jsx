import { Outlet } from "react-router-dom";

import Header from "./Header";
import BottomNav from "./BottomNav";

import "../../styles/layout.css";

function Layout() {
    return (
        <div className="app-layout">
            <Header />

            <main className="app-main">
                <Outlet />
            </main>

            <BottomNav />
        </div>
    );
}

export default Layout;