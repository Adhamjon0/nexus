import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Home,
    Users,
    UserRound,
    GraduationCap,
    Building2,
    HeartHandshake,
    ShieldCheck,
    Menu,
} from "lucide-react";

import MobileMenu from "./MobileMenu";
import "../../styles/header.css";

const navItems = [
    {
        label: "Bosh sahifa",
        path: "/",
        icon: Home,
    },
    {
        label: "Talabalar",
        path: "/students",
        icon: Users,
    },
    {
        label: "O‘qituvchilar",
        path: "/teachers",
        icon: UserRound,
    },
    {
        label: "Tyutor",
        path: "/tutor",
        icon: GraduationCap,
    },
    {
        label: "Ijtimoiy faollik",
        path: "/social-activity",
        icon: HeartHandshake,
    },
    {
        label: "Dekanat",
        path: "/deanery",
        icon: Building2,
    },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="container header-inner">

                    <Link
                        to="/"
                        className="logo"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="logo-mark">
                            N
                        </span>

                        <span className="logo-text">
                            NEXUS
                        </span>
                    </Link>

                    <nav className="desktop-nav">
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""
                                        }`
                                    }
                                >
                                    <Icon
                                        size={17}
                                        strokeWidth={1.8}
                                    />

                                    <span>
                                        {item.label}
                                    </span>
                                </NavLink>
                            );
                        })}
                    </nav>

                    <div className="header-actions">

                        {/* MAXFIY BO‘LIM */}
                        <Link
                            to="/student-login"
                            className="private-button"
                        >
                            <ShieldCheck
                                size={17}
                                strokeWidth={1.8}
                            />

                            <span>
                                Talabalar ma’lumotlari
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="mobile-menu-button"
                            onClick={() =>
                                setIsMenuOpen(true)
                            }
                            aria-label="Menyuni ochish"
                        >
                            <Menu
                                size={23}
                                strokeWidth={1.8}
                            />
                        </button>

                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default Header;