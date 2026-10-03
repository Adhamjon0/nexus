import { NavLink } from "react-router-dom";
import {
    Home,
    Users,
    UserRound,
    GraduationCap,
    Building2,
} from "lucide-react";

import "../../styles/bottom-nav.css";

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
        label: "O‘qituvchi",
        path: "/teachers",
        icon: UserRound,
    },
    {
        label: "Tyutor",
        path: "/tutor",
        icon: GraduationCap,
    },
    {
        label: "Dekanat",
        path: "/deanery",
        icon: Building2,
    },
];

function BottomNav() {
    return (
        <nav className="bottom-nav">
            <div className="bottom-nav-inner">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `bottom-nav-item ${isActive ? "active" : ""
                                }`
                            }
                        >
                            <Icon size={20} strokeWidth={1.8} />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}

export default BottomNav;